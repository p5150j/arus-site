import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Patrick Ortell — Engineering leader with 14 years of experience, 3 exits. CTO, VP Engineering, AI/ML, cloud-native architecture.',
};

export default function ResumePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-4">
          Patrick Ortell
        </h1>
        <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-2">
          VP Engineering | CTO | Technical Product Owner | AI/ML Leader
        </p>
        <p className="text-lg text-white/40 font-mono">
          Fort Collins, CO (Remote-First)
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/Patrick_Ortell_Resume2026.pdf"
            download
            className="px-8 py-4 bg-white text-[#0a0a0a] text-lg font-semibold rounded hover:bg-white/90 transition-colors"
          >
            Download PDF
          </a>
          <a
            href="mailto:patrick.ortell@arus.io"
            className="px-8 py-4 text-white/60 text-lg hover:text-white transition-colors"
          >
            patrick.ortell@arus.io
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Summary</h2>
        <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
          Engineering leader with 14 years of experience scaling products from zero to $50M ARR. Three successful exits.
          Built and led teams from 2 to 80+ across CTO, VP Engineering, and Technical Product Owner roles. Deep hands-on
          expertise in AI/ML (LLMs, MLOps, SageMaker, Langchain), blockchain infrastructure, and cloud-native architecture.
          Proven track record of 100% on-time delivery, 70% cost reductions through LLM automation, and shipping
          production AI products ahead of the market.
        </p>
      </section>

      {/* Key Achievements */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Key Achievements</h2>
        <ul className="space-y-4 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">$0 to $50M ARR</strong>
            <span className="text-white/40"> — </span>
            Scaled product and grew engineering org from senior IC to VP level
          </li>
          <li>
            <strong className="text-white font-semibold">3 successful acquisitions</strong>
            <span className="text-white/40"> — </span>
            biemedia, Pegcog/Techstars, and contributing roles
          </li>
          <li>
            <strong className="text-white font-semibold">100% on-time delivery</strong>
            <span className="text-white/40"> — </span>
            8 consecutive quarters on a decentralized protocol (Rust, AWS, K8s)
          </li>
          <li>
            <strong className="text-white font-semibold">70% support cost reduction</strong>
            <span className="text-white/40"> — </span>
            Via LLM automation (GPT-4, Langchain) at SpexAI
          </li>
          <li>
            <strong className="text-white font-semibold">First AI chatbot in AgTech</strong>
            <span className="text-white/40"> — </span>
            A full year ahead of any competitor
          </li>
          <li>
            <strong className="text-white font-semibold">85% fewer production incidents</strong>
            <span className="text-white/40"> — </span>
            Through MLOps discipline and observability
          </li>
          <li>
            <strong className="text-white font-semibold">60% MTTR reduction</strong>
            <span className="text-white/40"> — </span>
            Via Grafana/Prometheus observability framework
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">Experience</h2>

        <div className="space-y-16 max-w-3xl">

          {/* Techstars */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Mentor</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Techstars | Jun 2023 – Present | Boulder, CO</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Lead mentor for early-stage companies on engineering architecture, product strategy, and technical hiring</li>
              <li>Advised on SOC2 compliance, DevOps, ML infrastructure, technical due diligence, and SDLC</li>
              <li>Helped founders build and scale high-functioning cross-functional engineering teams</li>
            </ul>
          </div>

          {/* Project Liberty */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Technical Product Manager</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Project Liberty — Frequency Protocol | Nov 2022 – Nov 2025 | Remote</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Directed 11-person distributed team across 4 time zones building a Rust-based decentralized social protocol</li>
              <li>Achieved 100% on-time delivery across 8 consecutive quarters, shipping 4 major protocol releases</li>
              <li>Reduced mean time to recovery (MTTR) by 60% through Grafana/Prometheus observability framework</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Rust, TypeScript, Svelte, AWS, Kubernetes, Terraform, GraphQL</p>
          </div>

          {/* SpexAI */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Machine Learning Engineer & Product Owner</h3>
            <p className="text-lg text-white/40 font-mono mb-4">SpexAI GmbH | Sep 2022 – Mar 2025 | Remote</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Led MLOps and product strategy for enterprise AI platform serving agricultural customers</li>
              <li>Improved ML model performance by 30% through pipeline optimization</li>
              <li>Reduced support costs 70% by shipping LLM-powered automation (GPT-4, Langchain)</li>
              <li>Cut production incidents 85% through MLOps discipline (MLflow, monitoring, CI/CD)</li>
              <li>Shipped the first chatbot in AgTech — a year ahead of any competitor</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Python, AWS SageMaker, Kubernetes, Terraform, Langchain, MLflow</p>
          </div>

          {/* Choi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Vice President of Engineering</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Choi Holdings | Sep 2021 – Jun 2022 | Remote</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed distributed team of 18 engineers across 4 time zones</li>
              <li>Achieved 95% satisfaction rating in weekly 1:1s; built high-trust engineering culture</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Nest.js, TypeScript, Vue.js, Swift, Kotlin, Terraform, AWS, Kubernetes</p>
          </div>

          {/* TiLT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Chief Technology Officer</h3>
            <p className="text-lg text-white/40 font-mono mb-4">TiLT | Jun 2020 – Mar 2021</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Led team of 7 engineers; owned technical roadmap and architecture decisions</li>
              <li>Reduced cloud costs 20% by migrating from Heroku to AWS</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, TypeScript, GraphQL, React, AWS</p>
          </div>

          {/* Radar */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">VP of Engineering</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Radar | Apr 2018 – Jun 2020 | Promoted from Senior Engineer → Director → VP</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Grew from IC to VP, managing 15 direct reports across blockchain trading infrastructure</li>
              <li>Shipped 4 technical strategies aligned with SEC compliance requirements</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, TypeScript, GraphQL, Vue.js, React, Python, Golang, Ethereum, Hyperledger, AWS, GCP</p>
          </div>

          {/* TurboTenant */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Chief Technology Officer</h3>
            <p className="text-lg text-white/40 font-mono mb-4">TurboTenant | Oct 2016 – Apr 2018 | Fort Collins, CO</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed 9 direct reports; introduced 3 new technologies driving 25% operational efficiency improvement</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, React, Ruby, PostgreSQL, AWS</p>
          </div>

          {/* CommercialTribe */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Senior Software Engineer → Director of R&D</h3>
            <p className="text-lg text-white/40 font-mono mb-4">CommercialTribe | Apr 2015 – Dec 2016</p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed 12 engineers across 3 time zones; achieved 90% sprint completion rate</li>
              <li>Built WebRTC real-time video platform and React Native applications</li>
            </ul>
          </div>

          {/* Earlier */}
          <div>
            <p className="text-lg text-white/40">
              <strong className="text-white/60 font-semibold">Earlier:</strong> Software Engineer at Cadence & Cause · Product Owner at Levels Beyond · Developer at biemedia <span className="text-[#FFE500] font-mono text-sm">(acquired)</span> · Engineer at Techstars/Pegcog <span className="text-[#FFE500] font-mono text-sm">(acquired)</span> · Intern at Mozilla
            </p>
          </div>

        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Technical Skills</h2>
        <ul className="space-y-5 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">AI/ML</strong>
            <span className="text-white/40"> — </span>
            LLMs, GPT-4, Langchain, MLflow, AWS SageMaker, ML pipelines, MLOps, model optimization
          </li>
          <li>
            <strong className="text-white font-semibold">Languages</strong>
            <span className="text-white/40"> — </span>
            Rust, Python, TypeScript/JavaScript, Golang, Ruby, Scala
          </li>
          <li>
            <strong className="text-white font-semibold">Infrastructure</strong>
            <span className="text-white/40"> — </span>
            AWS, GCP, Kubernetes, Terraform, Docker, CI/CD, SOC2 compliance
          </li>
          <li>
            <strong className="text-white font-semibold">Backend</strong>
            <span className="text-white/40"> — </span>
            Node.js, Nest.js, GraphQL, PostgreSQL, MongoDB, Elasticsearch, Redis
          </li>
          <li>
            <strong className="text-white font-semibold">Frontend</strong>
            <span className="text-white/40"> — </span>
            React, Vue.js, Svelte, React Native
          </li>
          <li>
            <strong className="text-white font-semibold">Blockchain</strong>
            <span className="text-white/40"> — </span>
            Ethereum, Hyperledger, Substrate/Rust protocols, SEC-compliant trading systems
          </li>
          <li>
            <strong className="text-white font-semibold">Leadership</strong>
            <span className="text-white/40"> — </span>
            Team scaling (2–80+), distributed teams, technical hiring, architecture review, product strategy
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Education & Certifications</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-xl text-white/60">
            <strong className="text-white font-semibold">Metropolitan State College of Denver</strong>
            <span className="text-white/40"> — </span>
            Dual BSA, Technical Communications & Computer Science (2009–2013)
          </p>
          <p className="text-lg text-white/40">
            AWS Data Analytics · Data Science on Google Cloud Platform: Architecting Solutions · AWS End User Computing Competency Partner · Ethereum: Building Blockchain Decentralized Apps · Planning and Releasing Software with JIRA · GraphQL Essential Training · Elasticsearch Essential Training · Blockchain: Beyond the Basics · Expert Scrum Master Certified (ESMC) · M101JS: MongoDB for Node.js
          </p>
        </div>
      </section>

      {/* Recommendations */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight">What people say</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;He will not say what you want to hear, but need to hear. Forging a solution
              that is fit for the task with as little ego as possible. His first product to market
              was the first ChatBot in an AgTech application, at least a year ahead of everyone else.
              Because he can cut through the noise.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Ben Niehaus, CTO at SpexAI
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick brought a rare combination of deep technical expertise — especially in AI —
              and a broad command of web3, crypto, wallets, and blockchain systems. His ability to
              translate complex systems into clear product direction was invaluable.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Kenne Ives, Head of Product at Project Liberty
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick was one of our mentors at Techstars and easily the most impactful.
              He has this rare ability to immediately understand a problem and zero in on
              smart, scrappy ways to solve it. He even jumped in to support our first AI/ML hire,
              from assessment to onboarding.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Larissa Licha, Co-Founder at Joyn
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick didn&rsquo;t just recite technical facts. He translated ML intricacies into
              choices that fit our product and resource constraints. If you need someone who can
              make real impact in ambiguous, high-stakes environments, Patrick is the person you
              want in your corner.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Corbin Long, Product at Project Liberty
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;He can be anything you need him to be. Architect, developer, product shepherd,
              teacher, organizer, leader. A bottomless well of skills. I believe he&rsquo;s the best
              CTO in Colorado and the first stop for me on any technology endeavor.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Robert Schachte, Co-Founder at HYVV
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick has a unique character mix between setting and maintaining high standards
              and an overall roll-with-it attitude that positively imprints on a team. Integrity,
              attention to detail, commitment to deadlines, quality are a handful of traits that
              represent Patrick.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Paul Ironside, CEO at CommercialTribe
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick is a total pro. There is no project too big or too small for this guy.
              He always goes above and beyond and delivers on time — usually more than what
              I&rsquo;ve asked for. I would jump at the opportunity to hire Patrick again in a heartbeat.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Charisse Bowen, PMP
            </footer>
          </blockquote>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
