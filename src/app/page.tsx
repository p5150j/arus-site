import Image from 'next/image';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-24 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-10">
          I help small teams make better technical decisions.
        </h1>

        <div className="space-y-6 text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
          <p>
            14 years building software. Three exits. Scaled teams from zero to 80+.
          </p>
          <p>
            Now I do fractional CTO work — a few hours a month, async-first, no chaos.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#0a0a0a] text-lg font-semibold rounded hover:bg-white/90 transition-colors"
          >
            Book a call
          </a>
          <a
            href="mailto:patrick.ortell@arus.io"
            className="px-8 py-4 text-white/60 text-lg hover:text-white transition-colors"
          >
            patrick.ortell@arus.io
          </a>
        </div>
      </section>

      {/* What I help with */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">What I help with</h2>

        <ul className="space-y-5 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">Architecture decisions</strong>
            <span className="text-white/40"> — </span>
            "Should we use X or Y? How do we structure this?"
          </li>
          <li>
            <strong className="text-white font-semibold">Code review</strong>
            <span className="text-white/40"> — </span>
            "Is this going to bite us later?"
          </li>
          <li>
            <strong className="text-white font-semibold">AI/ML implementation</strong>
            <span className="text-white/40"> — </span>
            LLMs, MLOps, when to build vs. buy. I shipped the first agentic spectral analysis models in AgTech.
          </li>
          <li>
            <strong className="text-white font-semibold">Product & roadmap</strong>
            <span className="text-white/40"> — </span>
            Backlog grooming, sprint planning, writing user stories that devs don't hate. I've been CPO and TPM.
          </li>
          <li>
            <strong className="text-white font-semibold">Infrastructure</strong>
            <span className="text-white/40"> — </span>
            AWS, GCP, Azure, Kubernetes, Terraform. Cloud migrations, SOC2 compliance, infosec audits, architecture reviews — more times than I can count.
          </li>
          <li>
            <strong className="text-white font-semibold">Technical hiring</strong>
            <span className="text-white/40"> — </span>
            I'll sit in your interviews. You'll know who can actually code.
          </li>
          <li>
            <strong className="text-white font-semibold">Founder sanity checks</strong>
            <span className="text-white/40"> — </span>
            "My dev says this will take 6 months. Is that real?"
          </li>
          <li>
            <strong className="text-white font-semibold">Building the thing</strong>
            <span className="text-white/40"> — </span>
            Sometimes you just need someone to ship it. I can build MVPs, prototypes, or production features — solo or alongside your team. (May cost extra depending on scope™)
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">How it works</h2>

        <div className="space-y-16 max-w-3xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Monthly retainer
              <span className="font-mono text-white/40 ml-4">$1,500–2,500</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed">
              Async Slack/Discord access. Zoom/Hangouts when you need face time. 4-6 hours of actual work per month — code review, architecture calls,
              debugging sessions. Response within 24-48 hours.
              Like having a senior technical advisor on speed dial.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              One-time audit
              <span className="font-mono text-white/40 ml-4">$2,500–5,000</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed">
              Deep dive into your codebase, architecture, or infrastructure. Written report with
              prioritized recommendations. 90-min walkthrough call. 2 weeks of follow-up questions.
              Good for before a raise, before a pivot, or when something feels wrong but you don't know what.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-12 max-w-4xl">
          <div className="md:w-56 flex-shrink-0">
            <Image
              src="/patrick-v3.jpg"
              alt="Patrick Ortell"
              width={224}
              height={398}
              className="rounded-lg w-56 aspect-[9/16] object-cover"
            />
          </div>

          <div className="space-y-6 text-xl text-white/60 leading-relaxed">
            <p>
              I'm Patrick. I've been CTO, VP Engineering, CPO, Technical Product Owner.
              Built teams, shipped products, been through three acquisitions.
              Written Rust for blockchain protocols, Python for ML pipelines,
              and mass amounts of JavaScript.
            </p>
            <p>
              Before all that, I was an intern at Mozilla. Before that, I was tutoring
              GED prep to homeless teenagers at a drop-in center in Denver. I still
              mentor at youth hackathons — 9 years now.
            </p>
            <p>
              I'm a <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Techstars</a> mentor. If you're in the network, you might already know me.
              If not, let's fix that.
            </p>
            <p className="text-white/40">
              Fort Collins, Colorado. Working remotely with teams everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight">What people say</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              "He will not say what you want to hear, but need to hear. Forging a solution
              that is fit for the task with as little ego as possible."
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Ben Niehaus, CTO at SpexAI
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              "Patrick was one of our mentors at Techstars and easily the most impactful.
              He has this rare ability to immediately understand a problem and zero in on
              smart, scrappy ways to solve it."
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Larissa Licha, Co-Founder at Joyn
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              "He can be anything you need him to be. Architect, developer, product shepherd,
              teacher, organizer, leader... I believe he's the best CTO in Colorado."
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Robert Schachte, Co-Founder at HYVV
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              "Patrick didn't just recite technical facts. He translated ML intricacies into
              choices that fit our product and resource constraints, helping us stay focused
              and move fast, even during pivots."
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Corbin Long, Product at Project Liberty
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      <Footer />
    </main>
  );
}
