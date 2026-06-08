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
          I build and lead the engineering teams that ship AI.
        </h1>

        <div className="space-y-6 text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
          <p>
            14 years building software. Three exits. Teams scaled from two to 80+. Products from $0 to $50M ARR.
          </p>
          <p>
            VP Engineering, CTO, Technical AI Product Manager. Looking for the next one.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/resume"
            className="px-8 py-4 bg-white text-[#0a0a0a] text-lg font-semibold rounded hover:bg-white/90 transition-colors"
          >
            See the full resume
          </a>
          <a
            href="mailto:patrick.ortell@arus.io"
            className="px-8 py-4 text-white/60 text-lg hover:text-white transition-colors"
          >
            patrick.ortell@arus.io
          </a>
        </div>
      </section>

      {/* What I do */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">What I do</h2>

        <ul className="space-y-8 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold block mb-2">Ship AI/ML in production</strong>
            First agentic AI assistant in AgTech, a full year ahead of any competitor. RAG over 2,000+ academic studies. Custom PyTorch + OpenCV computer vision pipelines. 70% support cost reduction via LLM automation. 85% fewer production incidents through MLOps discipline.
          </li>
          <li>
            <strong className="text-white font-semibold block mb-2">Lead engineering teams</strong>
            IC → Director → VP → CTO across five companies. Up to 18 direct reports. 95% team satisfaction. 100% on-time delivery, eight consecutive quarters. Remote-first, async, no chaos.
          </li>
          <li>
            <strong className="text-white font-semibold block mb-2">Scale companies</strong>
            Three acquisitions. $0 to $50M ARR. Teams from two to 80+. I&apos;ve been in the room for the fundraises, the diligence, and the integrations.
          </li>
          <li>
            <strong className="text-white font-semibold block mb-2">Own architecture & infrastructure</strong>
            AWS, GCP, Azure, Kubernetes, Terraform. Cloud migrations, SOC2 audits, HIPAA-compliant data pipelines, NFT marketplaces on Flow, decentralized exchanges on Ethereum, Rust protocol work on Substrate.
          </li>
          <li>
            <strong className="text-white font-semibold block mb-2">Drive product & roadmap</strong>
            Technical Product Manager for Frequency Protocol and SpexAI. PMF validation, roadmap development, sprint planning, technical due diligence. I&apos;ve been CPO and TPM — I know how to write user stories engineers don&apos;t hate.
          </li>
        </ul>
      </section>

      {/* By the numbers */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">By the numbers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">3</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">Exits</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">$50M</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">ARR grown from $0</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">80+</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">Team peak (from 2)</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">14yr</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">Shipping software</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">On-time, 8 quarters</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">-85%</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">Production incidents</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">-70%</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">Support cost via LLMs</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">-60%</div>
            <div className="text-sm text-white/50 font-mono uppercase tracking-wider">MTTR</div>
          </div>
        </div>
      </section>

      {/* Recently */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">Recently</h2>

        <div className="space-y-12 max-w-3xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Liberty — Frequency Protocol</h3>
            <p className="text-sm text-white/40 font-mono mb-4">Technical Product Manager · Nov 2022 – Nov 2025</p>
            <p className="text-lg text-white/60 leading-relaxed">
              Directed an 11-engineer distributed team across 4 time zones building a Rust-based decentralized social protocol.
              Shipped on-chain LLM context portability, a B2B consent-based data marketplace, and Rust PII security nodes.
              Eight consecutive quarters of 100% on-time delivery.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              SpexAI <span className="text-[#FFE500] font-mono text-base ml-2">(acquired)</span>
            </h3>
            <p className="text-sm text-white/40 font-mono mb-4">ML Engineer & Product Owner · Sep 2022 – Mar 2025</p>
            <p className="text-lg text-white/60 leading-relaxed">
              Led the full AI/ML portfolio for an enterprise AgTech platform. Shipped the first agentic AI assistant in AgTech a full year
              ahead of any competitor. Built RAG over 2,000+ academic studies, custom PyTorch + OpenCV CV pipelines, and Langchain
              agents for NL-to-SQL across greenhouse operations. Cut support costs 70%, production incidents 85%.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Techstars</h3>
            <p className="text-sm text-white/40 font-mono mb-4">All Star Mentor · Jun 2023 – Present</p>
            <p className="text-lg text-white/60 leading-relaxed">
              All Star Mentor three years running. Pro bono lead mentor for early-stage AI companies — model evaluation, RAG
              architectures, technical hiring, SOC2 prep. Built the automated technical and product due diligence pipelines
              Techstars uses to grade program applicants.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/resume"
            className="text-white/40 hover:text-white transition-colors font-mono text-sm"
          >
            → See the full resume
          </a>
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
              I&apos;m Patrick. I&apos;ve been CTO, VP Engineering, CPO, Technical Product Owner.
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
              I&apos;m a <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Techstars</a> All Star Mentor (three years running). Off the clock I do pro bono AI/ML work for nonprofits at <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">arus impact</a> — Bellingcat, Reporters Without Borders, CyberPeace Institute.
            </p>
            <p className="text-white/40">
              Fort Collins, Colorado. Open to remote, hybrid, or the right opportunity anywhere.
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
              &ldquo;He will not say what you want to hear, but need to hear. Forging a solution
              that is fit for the task with as little ego as possible.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Ben Niehaus, CTO at SpexAI
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick was one of our mentors at Techstars and easily the most impactful.
              He has this rare ability to immediately understand a problem and zero in on
              smart, scrappy ways to solve it.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Larissa Licha, Product Director, AI Context & Memory at Miro
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;He can be anything you need him to be. Architect, developer, product shepherd,
              teacher, organizer, leader... I believe he&apos;s the best CTO in Colorado.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Robert Schachte, Co-Founder at HYVV
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick didn&apos;t just recite technical facts. He translated ML intricacies into
              choices that fit our product and resource constraints, helping us stay focused
              and move fast, even during pivots.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Corbin Long, Product at Amplica Labs
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
