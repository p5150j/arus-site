import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Patrick Ortell — Engineering leader and AI/ML practitioner with 14+ years shipping production systems. AI Infrastructure & Platform Architect, CTO, VP Engineering. 3 exits.',
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
          AI Infrastructure & Platform Architect | VP Engineering | CTO | AI/ML Leader
        </p>
        <p className="text-lg text-white/40 font-mono">
          Fort Collins, CO (Remote-First)
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/patrick_ortell_resume.pdf?v=20260226"
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
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-mono">
          <a href="https://linkedin.com/in/patrickortell" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/p5150j" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">GitHub</a>
          <a href="https://arus.io" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">arus.io</a>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Summary</h2>
        <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
          Engineering leader and AI/ML practitioner with 14+ years shipping production systems — not demos, not
          decks, not prototypes. 3 exits. Teams scaled from 2 to 80+. Products from $0 to $50M ARR. I&rsquo;ve been
          CTO, VP Engineering, AI Infrastructure Architect, Technical Product Owner, ML Engineer, and Fractional
          CTO across startups, enterprise AI platforms, and decentralized protocol teams. Off the clock, I do{' '}
          <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">pro bono AI/ML work for nonprofits</a>,
          mentor at Techstars (#GiveFirst, All Star Mentor 3 consecutive years), and ship open-source projects
          that are equal parts unhinged and useful.
        </p>
      </section>

      {/* Key Achievements */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Key Achievements</h2>

        <div className="space-y-10 max-w-3xl">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">AI/ML & Product</h3>
            <ul className="list-disc pl-5 space-y-3 text-base text-white/60">
              <li>
                <strong className="text-white font-semibold">In-house SME replication via LoRA</strong>
                <span className="text-white/40"> — </span>
                Fine-tuning pipelines on open-source foundation models replicating subject-matter experts across complex insurance policy lines, zero vendor lock-in
              </li>
              <li>
                <strong className="text-white font-semibold">Enterprise GraphRAG</strong>
                <span className="text-white/40"> — </span>
                High-throughput hybrid knowledge-graph + RAG architecture with distributed vector storage, indexing massive corporate repositories with high retrieval accuracy
              </li>
              <li>
                <strong className="text-white font-semibold">First agentic AI assistant in AgTech</strong>
                <span className="text-white/40"> — </span>
                A full year ahead of any competitor; designed prompts, reduced hallucinations, iterated on adoption data
              </li>
              <li>
                <strong className="text-white font-semibold">Custom PyTorch + OpenCV pipeline</strong>
                <span className="text-white/40"> — </span>
                Spectral imaging cameras analyzing plant health (mold, disease, transpiration rates)
              </li>
              <li>
                <strong className="text-white font-semibold">RAG system</strong>
                <span className="text-white/40"> — </span>
                Ingesting 2,000+ academic studies, deployed as a daily copilot for greenhouse growers via Azure GPT
              </li>
              <li>
                <strong className="text-white font-semibold">Langchain agents</strong>
                <span className="text-white/40"> — </span>
                OSS + closed LLMs + NLTK converting natural language into cross-domain database queries
              </li>
              <li>
                <strong className="text-white font-semibold">Predictive models + digital twins</strong>
                <span className="text-white/40"> — </span>
                Integrated with PRIVA environmental controls and CFD models for real-time greenhouse optimization
              </li>
              <li>
                <strong className="text-white font-semibold">On-chain LLM context portability</strong>
                <span className="text-white/40"> — </span>
                Vendor-agnostic AI conversations stored cryptographically on the Frequency blockchain
              </li>
              <li>
                <strong className="text-white font-semibold">Rust-based PII security nodes</strong>
                <span className="text-white/40"> — </span>
                Daemon processes giving users real-time control over unauthorized data transmission to brokers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Outcomes & Delivery</h3>
            <ul className="list-disc pl-5 space-y-3 text-base text-white/60">
              <li>
                <strong className="text-white font-semibold">70% support cost reduction</strong>
                <span className="text-white/40"> — </span>
                Via LLM-powered automation (GPT-4, Langchain)
              </li>
              <li>
                <strong className="text-white font-semibold">85% fewer production incidents</strong>
                <span className="text-white/40"> — </span>
                Through MLOps discipline (MLflow, CI/CD, observability)
              </li>
              <li>
                <strong className="text-white font-semibold">30% ML model performance improvement</strong>
                <span className="text-white/40"> — </span>
                Via pipeline optimization and training iteration
              </li>
              <li>
                <strong className="text-white font-semibold">100% on-time delivery</strong>
                <span className="text-white/40"> — </span>
                8 consecutive quarters directing an 11-person distributed team
              </li>
              <li>
                <strong className="text-white font-semibold">60% MTTR reduction</strong>
                <span className="text-white/40"> — </span>
                Via Grafana/Prometheus observability framework
              </li>
              <li>
                <strong className="text-white font-semibold">25% operational efficiency improvement</strong>
                <span className="text-white/40"> — </span>
                Through technology introduction
              </li>
              <li>
                <strong className="text-white font-semibold">20% cloud cost reduction</strong>
                <span className="text-white/40"> — </span>
                Via infrastructure migration
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Leadership & Scale</h3>
            <ul className="list-disc pl-5 space-y-3 text-base text-white/60">
              <li>
                <strong className="text-white font-semibold">$0 to $50M ARR</strong>
                <span className="text-white/40"> — </span>
                Grew engineering org from senior IC to VP level
              </li>
              <li>
                <strong className="text-white font-semibold">3 successful exits</strong>
                <span className="text-white/40"> — </span>
                SpexAI, biemedia, Pegcog/Techstars
              </li>
              <li>
                <strong className="text-white font-semibold">Teams scaled from 2 to 80+</strong>
                <span className="text-white/40"> — </span>
                Across CTO, VP Engineering, and Technical Product Owner roles
              </li>
              <li>
                <strong className="text-white font-semibold">IC &rarr; Director &rarr; VP &rarr; CTO</strong>
                <span className="text-white/40"> — </span>
                Progressive leadership across multiple companies
              </li>
              <li>
                <strong className="text-white font-semibold">95% team satisfaction</strong>
                <span className="text-white/40"> — </span>
                In weekly 1:1s; built high-trust remote-first engineering cultures
              </li>
              <li>
                <strong className="text-white font-semibold">Automated technical + product due diligence pipelines</strong>
                <span className="text-white/40"> — </span>
                For Techstars applicant evaluation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Open Source & Community</h3>
            <ul className="list-disc pl-5 space-y-3 text-base text-white/60">
              <li>
                <strong className="text-white font-semibold">4 OSS projects</strong>
                <span className="text-white/40"> — </span>
                Synthetic user research (Bureau of Synthetic Affairs), expert duplication via LoRA (Xerox Project), multi-agent PRD validation (PRD Executioner), ML-powered social network (Narwal)
              </li>
              <li>
                <strong className="text-white font-semibold">11 nonprofit AI/ML infrastructure projects</strong>
                <span className="text-white/40"> — </span>
                Via <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">arus impact</a> — OSINT for Bellingcat, press freedom intelligence for RSF, humanitarian early warning systems
              </li>
              <li>
                <strong className="text-white font-semibold">Techstars All Star Mentor</strong>
                <span className="text-white/40"> — </span>
                3 consecutive years
              </li>
              <li>
                <strong className="text-white font-semibold">Code for America</strong>
                <span className="text-white/40"> — </span>
                FOCO chapter, 9+ years
              </li>
              <li>
                <strong className="text-white font-semibold">Youth hackathon mentor</strong>
                <span className="text-white/40"> — </span>
                Poudre School District, 9+ years
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">Experience</h2>

        <div className="space-y-16 max-w-3xl">

          {/* myCOI / Illumend */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">AI Infrastructure & Platform Architect (Consultant)</h3>
            <p className="text-lg text-white/40 font-mono mb-4">myCOI / Illumend | Jan 2026 – Present | Remote / Hybrid</p>
            <p className="text-lg text-white/60 mb-4">
              Architecting the in-house enterprise AI platform for an insurance-compliance leader — fine-tuning,
              retrieval, and model-serving infrastructure built to run entirely inside the company&apos;s own boundary.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Architected and deployed in-house LoRA fine-tuning pipelines on open-source foundation models — replicating subject-matter experts across complex insurance policy lines without third-party vendor lock-in</li>
              <li>Designed a high-throughput hybrid GraphRAG (knowledge graph + RAG) architecture paired with distributed vector databases — processing and indexing massive corporate repositories with high retrieval accuracy</li>
              <li>Implemented strict localized data boundaries and local model-serving pipelines — 100% PII containment and zero external data transmission, in compliance with regulatory standards</li>
              <li>Consulted directly with executive management on hardware capacity planning, model-serving strategy, and the enterprise AI roadmap</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">LoRA/PEFT fine-tuning, open-source LLMs, GraphRAG, knowledge graphs, distributed vector DBs, local model serving, bare-metal GPU infrastructure</p>
          </div>

          {/* Techstars */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Mentor</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Techstars | Jun 2023 – Present | Boulder, CO (Part-Time, Hybrid) | #GiveFirst</p>
            <p className="text-lg text-white/60 mb-4">
              Pro bono lead mentor for early-stage companies in the Techstars program — providing the full spectrum
              of fractional CTO/CPO advisory as a give-back to the founder community.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>AI/ML model evaluation, framework selection, vector database architecture, and vendor assessment for early-stage companies building AI-powered products</li>
              <li>Hands-on guidance on LLM integration, prompt engineering, RAG architectures, and ML infrastructure design</li>
              <li>Product-market fit validation, product discovery, and roadmap prioritization</li>
              <li>Compliance guidance including SOC2, DevOps best practices, and technical due diligence prep</li>
              <li>Technical hiring support — sourcing, assessment, and onboarding for engineering and ML roles</li>
              <li>Built automated technical and product due diligence pipelines for Techstars — grading program applicants across a structured evaluation matrix</li>
            </ul>
          </div>

          {/* arus.io */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Founder & Technical Advisor</h3>
            <p className="text-lg text-white/40 font-mono mb-4"><a href="https://arus.io" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">arus.io</a> | Feb 2010 – Present | Colorado (Remote)</p>
            <p className="text-lg text-white/60 mb-4">
              Fractional CTO/CPO and technical advisor for early-stage startups. 16 years of engineering, product, and
              leadership experience distilled into high-impact advisory — a few hours a month, async-first, no chaos.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>LLM strategy and implementation (RAG, agents, prompt engineering, model selection)</li>
              <li>ML pipeline architecture, MLOps, and model deployment guidance</li>
              <li>AI product discovery — helping founders identify where AI creates real value vs. hype</li>
              <li>Architecture reviews, code reviews, technology selection, and cloud infrastructure design</li>
              <li>Product-market fit validation, roadmap development, and fundraising support</li>
              <li>Technical hiring — sourcing, assessment, and onboarding for engineering and ML roles</li>
              <li>Founder sanity checks — the honest, low-ego perspective on what to build, what to skip, and what to fix</li>
            </ul>
          </div>

          {/* Project Liberty */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Technical Product Manager</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Project Liberty — Frequency Protocol | Nov 2022 – Nov 2025 | Remote</p>
            <p className="text-lg text-white/60 mb-4">
              Technical Product Owner for Frequency, a decentralized social protocol. Led both core protocol delivery
              and AI/ML initiatives focused on data sovereignty, LLM context portability, and privacy-preserving infrastructure.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Led development of an open-source system for storing LLM conversation contexts on the Frequency blockchain — enabling portable, vendor-agnostic AI interactions without vendor lock-in</li>
              <li>Designed B2B user-approved LLM context sharing framework — a consent-based data marketplace on decentralized infrastructure</li>
              <li>Directed development of Rust-based PII security nodes — daemon processes giving users real-time control over leaked data being passed to data brokers</li>
              <li>Directed 11-person distributed team across 4 time zones building a Rust-based decentralized social protocol</li>
              <li>Achieved 100% on-time delivery across 8 consecutive quarters, shipping 4 major protocol releases</li>
              <li>Reduced mean time to recovery (MTTR) by 60% through Grafana/Prometheus observability framework</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Rust, TypeScript, Svelte, AWS, Kubernetes, Terraform, GraphQL, LLMs (GPT, Claude, Phi), cryptographic protocols, on-chain storage</p>
          </div>

          {/* SpexAI */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Machine Learning Engineer & Product Owner</h3>
            <p className="text-lg text-white/40 font-mono mb-4">SpexAI GmbH | Sep 2022 – Mar 2025 | Remote <span className="text-[#FFE500]">(Acquired)</span></p>
            <p className="text-lg text-white/60 mb-4">
              Technical Product Owner & MLOps Lead for enterprise AI platform serving agricultural customers. Led the full
              AI/ML product portfolio — from computer vision pipelines to LLM-powered copilots — across the entire greenhouse operations stack.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Built custom OpenCV + PyTorch object detection pipeline for spectral imaging cameras analyzing plant health in real time — detecting mold, disease, and measuring transpiration rates</li>
              <li>Shipped the first agentic AI assistant in AgTech — a full year ahead of any competitor — designed prompts, optimized for accuracy, reduced hallucinations</li>
              <li>Reduced support costs 70% by building LLM-powered automation (GPT-4, Langchain) — end-to-end from prompt engineering through deployment and monitoring</li>
              <li>Architected a RAG system ingesting 2,000+ academic studies on plant health and botany — deployed as a daily copilot for greenhouse growers via Azure GPT</li>
              <li>Designed Langchain agents (OSS + closed LLMs + NLTK) converting natural language into cross-domain database queries for greenhouse operations</li>
              <li>Built predictive models + digital twins integrated with PRIVA environmental controls and CFD models for real-time greenhouse optimization</li>
              <li>Improved ML model performance by 30% through pipeline optimization, training iteration, and model tuning</li>
              <li>Cut production incidents 85% through MLOps discipline (MLflow, monitoring, CI/CD)</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Python, PyTorch, OpenCV, GPT-4, Azure OpenAI, Langchain, NLTK, AWS SageMaker, Kubernetes, Terraform, MLflow, PRIVA, Vector DBs</p>
          </div>

          {/* Choi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Vice President of Engineering</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Choi Holdings | Sep 2021 – Jun 2022 | Remote</p>
            <p className="text-lg text-white/60 mb-4">
              Led engineering for an NFT marketplace platform built on the Flow blockchain — from smart contracts to consumer-facing product.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed distributed team of 18 engineers across 4 time zones</li>
              <li>Architected and shipped NFT minting, marketplace, and wallet integration on the Flow blockchain using the Flow SDK</li>
              <li>Achieved 95% satisfaction rating in weekly 1:1s; built high-trust engineering culture</li>
              <li>Partnered with business teams to align engineering priorities with product and business outcomes</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Nest.js, TypeScript, React, Flow SDK, Vue.js, Swift, Kotlin, Terraform, AWS, Kubernetes</p>
          </div>

          {/* TiLT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Chief Technology Officer</h3>
            <p className="text-lg text-white/40 font-mono mb-4">TiLT | Jun 2020 – Mar 2021</p>
            <p className="text-lg text-white/60 mb-4">
              CTO for an FMLA leave management platform navigating one of the most complex compliance landscapes
              in HR tech — HIPAA, insurance provider integrations, payroll systems, internal HR workflows, and federal government reporting.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Led team of 7 engineers; owned technical roadmap and architecture decisions</li>
              <li>Architected integrations across HIPAA-compliant data pipelines connecting insurance companies, payroll providers, HR systems, and federal reporting requirements</li>
              <li>Reduced cloud costs 20% by migrating from Heroku to AWS while maintaining HIPAA compliance</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, TypeScript, GraphQL, React, AWS</p>
          </div>

          {/* Radar */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">VP of Engineering</h3>
            <p className="text-lg text-white/40 font-mono mb-4">Radar Relay | Apr 2018 – Jun 2020 | Promoted from Senior Engineer &rarr; Director &rarr; VP</p>
            <p className="text-lg text-white/60 mb-4">
              One of the earliest decentralized exchanges (DEX) on Ethereum — an open order book relayer built on the 0x protocol.
              Wallet-to-wallet, non-custodial trading with no accounts, no deposits, no trading limits.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Grew from IC to VP, managing 15 direct reports building decentralized trading infrastructure</li>
              <li>Shipped 4 technical strategies aligned with SEC compliance requirements — navigating novel regulatory territory for tokenized asset trading</li>
              <li>Built the engineering architecture for 0x protocol integration, smart DEX routing, multi-liquidity source aggregation (Uniswap, Kyber, Curve), and margin trading via dYdX</li>
              <li>Collaborated with SEC on compliance frameworks for decentralized asset trading — one of the first teams to operate a DEX within a regulatory compliance model</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, TypeScript, GraphQL, Vue.js, React, Python, Golang, Ethereum, 0x Protocol, Hyperledger, AWS, GCP</p>
          </div>

          {/* TurboTenant */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Chief Technology Officer</h3>
            <p className="text-lg text-white/40 font-mono mb-4">TurboTenant | Oct 2016 – Apr 2018 | Fort Collins, CO</p>
            <p className="text-lg text-white/60 mb-4">
              CTO for a property management SaaS platform for independent landlords — now serving 900K+ landlords nationwide.
              Full rental lifecycle: listing syndication (28+ sites), tenant screening (TransUnion), online applications,
              lease generation, rent collection, and maintenance management.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed 9 direct reports; owned technical roadmap, architecture, and hiring</li>
              <li>Introduced 3 new technologies driving 25% operational efficiency improvement</li>
              <li>Built the core platform infrastructure that still powers the product today</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">Node.js, React, Ruby, PostgreSQL, AWS</p>
          </div>

          {/* CommercialTribe */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Senior Software Engineer &rarr; Director of R&D</h3>
            <p className="text-lg text-white/40 font-mono mb-4">CommercialTribe | Apr 2015 – Dec 2016 | Denver Metropolitan Area</p>
            <p className="text-lg text-white/60 mb-4">
              Director of R&D for a sales enablement and LMS SaaS platform — helping enterprise sales teams shorten ramp
              times and boost quota attainment through video-based practice, coaching, and certification workflows.
            </p>
            <ul className="space-y-3 text-lg text-white/60">
              <li>Managed 12 engineers across 3 time zones; achieved 90% sprint completion rate</li>
              <li>Built WebRTC-based real-time video platform powering the core product</li>
              <li>Shipped React Native mobile application extending the platform to mobile-first sales workflows</li>
              <li>Led R&D on video analysis and coaching feedback features</li>
            </ul>
            <p className="mt-3 text-sm text-white/30 font-mono">WebRTC, React Native, React, Node.js, AWS</p>
          </div>

          {/* Earlier */}
          <div>
            <p className="text-lg text-white/40">
              <strong className="text-white/60 font-semibold">Earlier:</strong> Software Engineer at Cadence & Cause · Software Developer / Product Owner at Levels Beyond (Reach Engine) · Developer at biemedia <span className="text-[#FFE500] font-mono text-sm">(acquired)</span> · Engineer at Techstars/Pegcog <span className="text-[#FFE500] font-mono text-sm">(acquired)</span> · Intern at Mozilla
            </p>
          </div>

        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Technical Skills</h2>
        <ul className="space-y-5 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">AI/ML & Prompt Engineering</strong>
            <span className="text-white/40"> — </span>
            LLMs, LoRA/PEFT fine-tuning, PyTorch, TensorFlow, OpenCV, Langchain/LangGraph, A2A, NLTK, prompt optimization, hallucination reduction, AI assistant/agent design, RAG architectures, GraphRAG, knowledge graphs, NL2SQL, computer vision, object detection, digital twins, CFD modeling, predictive modeling, MLflow, SageMaker/Bedrock, Azure OpenAI, Vertex, MLOps, model deployment, AI context portability, data sovereignty
          </li>
          <li>
            <strong className="text-white font-semibold">Product Management</strong>
            <span className="text-white/40"> — </span>
            Product discovery, requirements definition, success metrics, stakeholder management, workflow design, adoption tracking, PMF validation, technical due diligence, Agile/Scrum, sprint planning, roadmap development
          </li>
          <li>
            <strong className="text-white font-semibold">Languages</strong>
            <span className="text-white/40"> — </span>
            Python, TypeScript/JavaScript, Rust, Golang, Ruby, Scala, Swift, Kotlin
          </li>
          <li>
            <strong className="text-white font-semibold">Frontend</strong>
            <span className="text-white/40"> — </span>
            React, Next.js, Svelte, React Native/Expo, Vue.js, AngularJS, D3.js
          </li>
          <li>
            <strong className="text-white font-semibold">Backend</strong>
            <span className="text-white/40"> — </span>
            Node.js, Nest.js, GraphQL, REST APIs, PostgreSQL, MongoDB, Elasticsearch, Redis, Vector DBs, data pipelines, WebRTC, real-time streaming
          </li>
          <li>
            <strong className="text-white font-semibold">Infrastructure & DevOps</strong>
            <span className="text-white/40"> — </span>
            AWS (SageMaker, Bedrock, Lambda, ECS/EKS, S3, RDS, DynamoDB, CloudFront, Route53, IAM, CloudWatch), GCP (Vertex AI, BigQuery, Cloud Run, GKE), Microsoft Azure, Kubernetes, Helm, Terraform, Docker, CI/CD, SOC2 compliance, Grafana, Prometheus
          </li>
          <li>
            <strong className="text-white font-semibold">Blockchain</strong>
            <span className="text-white/40"> — </span>
            Ethereum, Hyperledger, Substrate/Rust protocols, SEC-compliant trading systems, cryptographic protocols, on-chain data storage, decentralized identity
          </li>
          <li>
            <strong className="text-white font-semibold">Leadership</strong>
            <span className="text-white/40"> — </span>
            IC &rarr; Director &rarr; VP &rarr; CTO progression; teams scaled from 2 to 80+; up to 18 direct reports; 95% team satisfaction; high-trust remote-first and async engineering cultures; full-cycle technical recruiting; 3 successful exits; $0 to $50M ARR
          </li>
        </ul>
      </section>

      {/* Open Source & Nonprofit Impact */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Open Source & Nonprofit Impact</h2>

        <div className="space-y-10 max-w-3xl">
          <div>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">arus impact</a>
              <span className="text-white/40"> — </span>
              AI/ML infrastructure for nonprofits doing real impact work. Data pipelines, ML tools, and integration middleware — scoped for mission, not margin. 501(c)(3) focused, pro bono.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">Featured Projects</h3>
            <ul className="space-y-4 text-lg text-white/60">
              <li>
                <a href="https://impact.arus.io/projects/bellingcat" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Bellingcat — OSINT Investigation Infrastructure</a>
                <span className="text-white/40"> — </span>
                Entity resolution, computer vision geolocation, and multilingual monitoring pipelines for open-source investigations supporting human rights accountability
              </li>
              <li>
                <a href="https://impact.arus.io/projects/reporters-without-borders" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Reporters Without Borders — Press Freedom Intelligence</a>
                <span className="text-white/40"> — </span>
                Automated violation monitoring, Press Freedom Index pipeline acceleration, and Journalism Trust Initiative (JTI) certification tooling
              </li>
              <li>
                <a href="https://impact.arus.io/projects/cyberpeace-institute" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">CyberPeace Institute — Cybersecurity Intelligence</a>
                <span className="text-white/40"> — </span>
                Scaling threat intelligence, volunteer matching, and cyber-resilience tooling from 240 NGOs to 10,000
              </li>
              <li>
                <a href="https://impact.arus.io/projects/data-pop-alliance" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Data-Pop Alliance — Humanitarian Early Warning</a>
                <span className="text-white/40"> — </span>
                Flood prediction pipelines, geospatial analytics, and humanitarian data infrastructure for climate-vulnerable communities
              </li>
              <li>
                <a href="https://impact.arus.io/projects/fairplay" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Fairplay — Children&rsquo;s Tech Accountability</a>
                <span className="text-white/40"> — </span>
                Automated dark pattern detection, platform policy monitoring, and COPPA compliance scanning for children&rsquo;s digital rights advocacy
              </li>
            </ul>
            <p className="mt-6">
              <a href="https://impact.arus.io/projects" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors font-mono text-sm">&rarr; View all 11 projects</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Open Source Projects</h3>
            <ul className="space-y-4 text-lg text-white/60">
              <li>
                <a href="https://github.com/p5150j/bureau-of-synthetic-affairs" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Bureau of Synthetic Affairs</a>
                <span className="text-white/40"> — </span>
                AI-powered synthetic user research system that intercepts anonymous Reddit confessions, cross-references them with federal government data, and manufactures 19-dimension synthetic personas to validate product ideas
              </li>
              <li>
                <a href="https://github.com/p5150j/xerox-project" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">The Xerox Project</a>
                <span className="text-white/40"> — </span>
                Expert duplication via LoRA fine-tuning — ingests academic papers, clinical research, and domain expertise, then synthesizes LoRA-weighted personas that learned the field. 94.7% voice match on first subject
              </li>
              <li>
                <a href="https://github.com/p5150j/PRD-Executioner" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">PRD Executioner</a>
                <span className="text-white/40"> — </span>
                Multi-agent system that generates 50–300 synthetic user personas, has them brutally review your PRD, and surfaces hidden conflicts through multi-agent debates — all in under 5 minutes
              </li>
              <li>
                <a href="https://github.com/p5150j/Narwal" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Narwal</a>
                <span className="text-white/40"> — </span>
                Fully open-source social network built on user sovereignty and transparency, with ML-powered video content labeling and serverless content moderation
              </li>
            </ul>
            <p className="mt-6">
              <a href="https://github.com/p5150j" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors font-mono text-sm">&rarr; View all repos</a>
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Education</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-xl text-white/60">
            <strong className="text-white font-semibold">Metropolitan State University of Denver</strong>
            <span className="text-white/40"> — </span>
            Dual BSA, Technical Communications & Computer Science (2009–2013)
          </p>
          <p className="text-lg text-white/40">
            Grant writing for non-profits, Digital design. Activities: Mhdivine Club, Collegiate Entrepreneurship Organization.
          </p>
          <ul className="space-y-2 text-lg text-white/60">
            <li>Tutor GED and College prep to inner city and at-risk youth for <a href="http://mhdivine.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Mhdivine club</a></li>
            <li><strong className="text-[#FFE500] font-semibold">Entrepreneur of the Year Award 2010</strong></li>
            <li>Volunteer work for <a href="http://www.soxplace.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Soxplace</a> with homeless teens (2009)</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Certifications & Licenses</h2>
        <div className="max-w-3xl">
          <div className="space-y-3 text-lg text-white/60">
            <div className="flex justify-between items-baseline">
              <span>AWS Data Analytics</span>
              <span className="text-white/30 font-mono text-sm">AWS · Feb 2020</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Data Science on Google Cloud Platform: Architecting Solutions</span>
              <span className="text-white/30 font-mono text-sm">Google · Feb 2020</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>AWS End User Computing Competency Partner</span>
              <span className="text-white/30 font-mono text-sm">AWS · Dec 2019</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Ethereum: Building Blockchain Decentralized Apps</span>
              <span className="text-white/30 font-mono text-sm">Sep 2018</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Planning and Releasing Software with JIRA</span>
              <span className="text-white/30 font-mono text-sm">Sep 2018</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>GraphQL Essential Training</span>
              <span className="text-white/30 font-mono text-sm">Feb 2018</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Elasticsearch Essential Training</span>
              <span className="text-white/30 font-mono text-sm">Jan 2018</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Blockchain: Beyond the Basics</span>
              <span className="text-white/30 font-mono text-sm">Dec 2017</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>Expert Scrum Master Certified (ESMC)</span>
              <span className="text-white/30 font-mono text-sm">Mountain Goat · Jan 2014</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span>M101JS: MongoDB for Node.js</span>
              <span className="text-white/30 font-mono text-sm">MongoDB University · Aug 2013</span>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Honors & Awards</h2>
        <ul className="space-y-4 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">Techstars All Star Mentor</strong>
            <span className="text-white/40"> — </span>
            3 consecutive years (2023, 2024, 2025)
          </li>
          <li>
            <strong className="text-white font-semibold">Entrepreneur of the Year Award</strong>
            <span className="text-white/40"> — </span>
            Metropolitan State College of Denver (2010)
          </li>
        </ul>
      </section>

      {/* Volunteering & Community */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Volunteering & Community</h2>
        <ul className="space-y-4 text-lg text-white/60 max-w-3xl">
          <li>
            <strong className="text-white font-semibold">Code for America</strong>
            <span className="text-white/40"> — </span>
            FOCO Chapter (Jun 2016 – Present, 9+ years) — Using technology to solve everyday challenges for nonprofits, schools, government, and grassroots organizations in Fort Collins
          </li>
          <li>
            <strong className="text-white font-semibold">Youth Hackathon Mentor</strong>
            <span className="text-white/40"> — </span>
            Poudre School District (Sep 2016 – Present, 9+ years) — Mentoring students building apps for mental health, nutrition, and physical activity
          </li>
          <li>
            <strong className="text-white font-semibold">Mentor</strong>
            <span className="text-white/40"> — </span>
            Sox Place (Jan 2008 – Sep 2009) — Drop-in center for homeless youth in Denver; meal prep, GED teaching, one-on-one counseling
          </li>
        </ul>
      </section>

      {/* Recommendations */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight">What people say</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;He will not say what you want to hear, but need to hear. Forging a solution
              that is fit for the task with as little ego as possible. Because he can cut through the noise.&rdquo;
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
              Larissa Licha, Product Director, AI Context & Memory at Miro
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
              Corbin Long, Product at Amplica Labs
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
              Charisse Bowen, PMP — Vice President, Federal Services
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick is an incredibly talented professional, who not only delivers industry expertise
              to projects, but also contributes to an inclusive work culture. With a creative mindset and
              an ability to think outside the box, working with Patrick is a true privilege.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Krystallin Baker, CCMP — Creative Strategist & Brand Storyteller
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick is a visionary when it comes to solving difficult tech-related problems.
              He understands the needs of the users and the limitations/opportunities surrounding how
              to build an effective solution. It&rsquo;s not often you find a DEV that puts this much thought
              into the how and why a product is needed.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Paul Ronto
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="text-xl text-white/70 leading-relaxed">
              &ldquo;Patrick is a true champion of ideas and creative innovation. He uses multiple technologies
              to create new and innovative applications and designs. With a high level of knowledge and
              understanding of web based technologies, and a side of creative genius, he makes an excellent
              addition to any organization.&rdquo;
            </p>
            <footer className="text-[#FFE500] font-mono text-sm">
              Keith Kacsh, Principal DevOps Engineer
            </footer>
          </blockquote>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
