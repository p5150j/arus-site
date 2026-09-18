import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Section from '@/components/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Patrick Ortell — Engineering leader and AI/ML practitioner with 14+ years shipping production systems. AI Infrastructure & Platform Architect, CTO, VP Engineering. 3 exits.',
};

export default function ResumePage() {
  return (
    <main className="paper text-ink min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-site px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6">
        <h1 className="md:col-span-8 font-black text-[clamp(64px,19vw,96px)] md:text-[clamp(96px,10.5vw,160px)] leading-[0.86] tracking-[-0.045em]">
          Patrick<br />Ortell
        </h1>
        <div className="md:col-span-4 md:self-end">
          <p className="text-xl leading-snug tracking-[-0.01em] mb-2">
            AI Infrastructure & Platform Architect | VP Engineering | CTO | AI/ML Leader
          </p>
          <p className="font-mono text-[13px] mb-6">
            Fort Collins, CO (Remote-First)
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-semibold">
            <a
              href="/patrick_ortell_resume.pdf?v=20260226"
              download
              className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors"
            >
              Download PDF
            </a>
            <a href="mailto:patrick.ortell@arus.io" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">
              patrick.ortell@arus.io
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 label">
            <a href="https://linkedin.com/in/patrickortell" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
            <a href="https://github.com/p5150j" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">GitHub</a>
            <a href="https://arus.io" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">arus.io</a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <Section n="01" label="Summary">
        <p className="text-xl md:text-2xl leading-snug tracking-[-0.01em] max-w-4xl">
          Engineering leader and AI/ML practitioner with 14+ years shipping production systems — not demos, not
          decks, not prototypes. 3 exits. Teams scaled from 2 to 80+. Products from $0 to $50M ARR. I&rsquo;ve been
          CTO, VP Engineering, AI Infrastructure Architect, Technical Product Owner, ML Engineer, and Fractional
          CTO across startups, enterprise AI platforms, and decentralized protocol teams. Off the clock, I do{' '}
          <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-1 hover:decoration-2">pro bono AI/ML work for nonprofits</a>,
          mentor at Techstars (#GiveFirst, All Star Mentor 3 consecutive years), and ship open-source projects
          that are equal parts unhinged and useful.
        </p>
      </Section>

      {/* Key Achievements */}
      <Section n="02" label="Key Achievements">

        <div className="space-y-10 max-w-4xl">
          <div>
            <h3 className="label border-t border-ink pt-2 mb-4">AI/ML & Product</h3>
            <ul className="space-y-2 text-[16px] leading-snug">
              <li>
                <strong className="text-ink font-semibold">In-house SME replication via LoRA</strong>
                <span> — </span>
                Fine-tuning pipelines on open-source foundation models replicating subject-matter experts across complex insurance policy lines, zero vendor lock-in
              </li>
              <li>
                <strong className="text-ink font-semibold">Enterprise GraphRAG</strong>
                <span> — </span>
                High-throughput hybrid knowledge-graph + RAG architecture with distributed vector storage, indexing massive corporate repositories with high retrieval accuracy
              </li>
              <li>
                <strong className="text-ink font-semibold">First agentic AI assistant in AgTech</strong>
                <span> — </span>
                A full year ahead of any competitor; designed prompts, reduced hallucinations, iterated on adoption data
              </li>
              <li>
                <strong className="text-ink font-semibold">Custom PyTorch + OpenCV pipeline</strong>
                <span> — </span>
                Spectral imaging cameras analyzing plant health (mold, disease, transpiration rates)
              </li>
              <li>
                <strong className="text-ink font-semibold">RAG system</strong>
                <span> — </span>
                Ingesting 2,000+ academic studies, deployed as a daily copilot for greenhouse growers via Azure GPT
              </li>
              <li>
                <strong className="text-ink font-semibold">Langchain agents</strong>
                <span> — </span>
                OSS + closed LLMs + NLTK converting natural language into cross-domain database queries
              </li>
              <li>
                <strong className="text-ink font-semibold">Predictive models + digital twins</strong>
                <span> — </span>
                Integrated with PRIVA environmental controls and CFD models for real-time greenhouse optimization
              </li>
              <li>
                <strong className="text-ink font-semibold">On-chain LLM context portability</strong>
                <span> — </span>
                Vendor-agnostic AI conversations stored cryptographically on the Frequency blockchain
              </li>
              <li>
                <strong className="text-ink font-semibold">Rust-based PII security nodes</strong>
                <span> — </span>
                Daemon processes giving users real-time control over unauthorized data transmission to brokers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label border-t border-ink pt-2 mb-4">Outcomes & Delivery</h3>
            <ul className="space-y-2 text-[16px] leading-snug">
              <li>
                <strong className="text-ink font-semibold">70% support cost reduction</strong>
                <span> — </span>
                Via LLM-powered automation (GPT-4, Langchain)
              </li>
              <li>
                <strong className="text-ink font-semibold">85% fewer production incidents</strong>
                <span> — </span>
                Through MLOps discipline (MLflow, CI/CD, observability)
              </li>
              <li>
                <strong className="text-ink font-semibold">30% ML model performance improvement</strong>
                <span> — </span>
                Via pipeline optimization and training iteration
              </li>
              <li>
                <strong className="text-ink font-semibold">100% on-time delivery</strong>
                <span> — </span>
                8 consecutive quarters directing an 11-person distributed team
              </li>
              <li>
                <strong className="text-ink font-semibold">60% MTTR reduction</strong>
                <span> — </span>
                Via Grafana/Prometheus observability framework
              </li>
              <li>
                <strong className="text-ink font-semibold">25% operational efficiency improvement</strong>
                <span> — </span>
                Through technology introduction
              </li>
              <li>
                <strong className="text-ink font-semibold">20% cloud cost reduction</strong>
                <span> — </span>
                Via infrastructure migration
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label border-t border-ink pt-2 mb-4">Leadership & Scale</h3>
            <ul className="space-y-2 text-[16px] leading-snug">
              <li>
                <strong className="text-ink font-semibold">$0 to $50M ARR</strong>
                <span> — </span>
                Grew engineering org from senior IC to VP level
              </li>
              <li>
                <strong className="text-ink font-semibold">3 successful exits</strong>
                <span> — </span>
                SpexAI, biemedia, Pegcog/Techstars
              </li>
              <li>
                <strong className="text-ink font-semibold">Teams scaled from 2 to 80+</strong>
                <span> — </span>
                Across CTO, VP Engineering, and Technical Product Owner roles
              </li>
              <li>
                <strong className="text-ink font-semibold">IC &rarr; Director &rarr; VP &rarr; CTO</strong>
                <span> — </span>
                Progressive leadership across multiple companies
              </li>
              <li>
                <strong className="text-ink font-semibold">95% team satisfaction</strong>
                <span> — </span>
                In weekly 1:1s; built high-trust remote-first engineering cultures
              </li>
              <li>
                <strong className="text-ink font-semibold">Automated technical + product due diligence pipelines</strong>
                <span> — </span>
                For Techstars applicant evaluation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label border-t border-ink pt-2 mb-4">Open Source & Community</h3>
            <ul className="space-y-2 text-[16px] leading-snug">
              <li>
                <strong className="text-ink font-semibold">4 OSS projects</strong>
                <span> — </span>
                Synthetic user research (Bureau of Synthetic Affairs), expert duplication via LoRA (Xerox Project), multi-agent PRD validation (PRD Executioner), ML-powered social network (Narwal)
              </li>
              <li>
                <strong className="text-ink font-semibold">11 nonprofit AI/ML infrastructure projects</strong>
                <span> — </span>
                Via <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-1 hover:decoration-2">arus impact</a> — OSINT for Bellingcat, press freedom intelligence for RSF, humanitarian early warning systems
              </li>
              <li>
                <strong className="text-ink font-semibold">Techstars All Star Mentor</strong>
                <span> — </span>
                3 consecutive years
              </li>
              <li>
                <strong className="text-ink font-semibold">Code for America</strong>
                <span> — </span>
                FOCO chapter, 9+ years
              </li>
              <li>
                <strong className="text-ink font-semibold">Youth hackathon mentor</strong>
                <span> — </span>
                Poudre School District, 9+ years
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section n="03" label="Experience">

        <div className="space-y-12 max-w-4xl">

          {/* myCOI / Illumend */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">AI Infrastructure & Platform Architect (Consultant)</h3>
            <p className="font-mono text-[13px] mb-4">myCOI / Illumend | Jan 2026 – Present | Remote / Hybrid</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Architecting the in-house enterprise AI platform for an insurance-compliance leader — fine-tuning,
              retrieval, and model-serving infrastructure built to run entirely inside the company&apos;s own boundary.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Architected and deployed in-house LoRA fine-tuning pipelines on open-source foundation models — replicating subject-matter experts across complex insurance policy lines without third-party vendor lock-in</li>
              <li>Designed a high-throughput hybrid GraphRAG (knowledge graph + RAG) architecture paired with distributed vector databases — processing and indexing massive corporate repositories with high retrieval accuracy</li>
              <li>Implemented strict localized data boundaries and local model-serving pipelines — 100% PII containment and zero external data transmission, in compliance with regulatory standards</li>
              <li>Consulted directly with executive management on hardware capacity planning, model-serving strategy, and the enterprise AI roadmap</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">LoRA/PEFT fine-tuning, open-source LLMs, GraphRAG, knowledge graphs, distributed vector DBs, local model serving, bare-metal GPU infrastructure</p>
          </div>

          {/* Techstars */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Mentor</h3>
            <p className="font-mono text-[13px] mb-4">Techstars | Jun 2023 – Present | Boulder, CO (Part-Time, Hybrid) | #GiveFirst</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Pro bono lead mentor for early-stage companies in the Techstars program — providing the full spectrum
              of fractional CTO/CPO advisory as a give-back to the founder community.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
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
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Founder & Technical Advisor</h3>
            <p className="font-mono text-[13px] mb-4"><a href="https://arus.io" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">arus.io</a> | Feb 2010 – Present | Colorado (Remote)</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Fractional CTO/CPO and technical advisor for early-stage startups. 16 years of engineering, product, and
              leadership experience distilled into high-impact advisory — a few hours a month, async-first, no chaos.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
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
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Technical Product Manager</h3>
            <p className="font-mono text-[13px] mb-4">Project Liberty — Frequency Protocol | Nov 2022 – Nov 2025 | Remote</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Technical Product Owner for Frequency, a decentralized social protocol. Led both core protocol delivery
              and AI/ML initiatives focused on data sovereignty, LLM context portability, and privacy-preserving infrastructure.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Led development of an open-source system for storing LLM conversation contexts on the Frequency blockchain — enabling portable, vendor-agnostic AI interactions without vendor lock-in</li>
              <li>Designed B2B user-approved LLM context sharing framework — a consent-based data marketplace on decentralized infrastructure</li>
              <li>Directed development of Rust-based PII security nodes — daemon processes giving users real-time control over leaked data being passed to data brokers</li>
              <li>Directed 11-person distributed team across 4 time zones building a Rust-based decentralized social protocol</li>
              <li>Achieved 100% on-time delivery across 8 consecutive quarters, shipping 4 major protocol releases</li>
              <li>Reduced mean time to recovery (MTTR) by 60% through Grafana/Prometheus observability framework</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Rust, TypeScript, Svelte, AWS, Kubernetes, Terraform, GraphQL, LLMs (GPT, Claude, Phi), cryptographic protocols, on-chain storage</p>
          </div>

          {/* SpexAI */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Machine Learning Engineer & Product Owner</h3>
            <p className="font-mono text-[13px] mb-4">SpexAI GmbH | Sep 2022 – Mar 2025 | Remote <span className="label ml-1 border-[1.5px] border-ink px-1.5 py-px align-middle">acquired</span></p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Technical Product Owner & MLOps Lead for enterprise AI platform serving agricultural customers. Led the full
              AI/ML product portfolio — from computer vision pipelines to LLM-powered copilots — across the entire greenhouse operations stack.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Built custom OpenCV + PyTorch object detection pipeline for spectral imaging cameras analyzing plant health in real time — detecting mold, disease, and measuring transpiration rates</li>
              <li>Shipped the first agentic AI assistant in AgTech — a full year ahead of any competitor — designed prompts, optimized for accuracy, reduced hallucinations</li>
              <li>Reduced support costs 70% by building LLM-powered automation (GPT-4, Langchain) — end-to-end from prompt engineering through deployment and monitoring</li>
              <li>Architected a RAG system ingesting 2,000+ academic studies on plant health and botany — deployed as a daily copilot for greenhouse growers via Azure GPT</li>
              <li>Designed Langchain agents (OSS + closed LLMs + NLTK) converting natural language into cross-domain database queries for greenhouse operations</li>
              <li>Built predictive models + digital twins integrated with PRIVA environmental controls and CFD models for real-time greenhouse optimization</li>
              <li>Improved ML model performance by 30% through pipeline optimization, training iteration, and model tuning</li>
              <li>Cut production incidents 85% through MLOps discipline (MLflow, monitoring, CI/CD)</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Python, PyTorch, OpenCV, GPT-4, Azure OpenAI, Langchain, NLTK, AWS SageMaker, Kubernetes, Terraform, MLflow, PRIVA, Vector DBs</p>
          </div>

          {/* Choi */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Vice President of Engineering</h3>
            <p className="font-mono text-[13px] mb-4">Choi Holdings | Sep 2021 – Jun 2022 | Remote</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Led engineering for an NFT marketplace platform built on the Flow blockchain — from smart contracts to consumer-facing product.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Managed distributed team of 18 engineers across 4 time zones</li>
              <li>Architected and shipped NFT minting, marketplace, and wallet integration on the Flow blockchain using the Flow SDK</li>
              <li>Achieved 95% satisfaction rating in weekly 1:1s; built high-trust engineering culture</li>
              <li>Partnered with business teams to align engineering priorities with product and business outcomes</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Nest.js, TypeScript, React, Flow SDK, Vue.js, Swift, Kotlin, Terraform, AWS, Kubernetes</p>
          </div>

          {/* TiLT */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Chief Technology Officer</h3>
            <p className="font-mono text-[13px] mb-4">TiLT | Jun 2020 – Mar 2021</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              CTO for an FMLA leave management platform navigating one of the most complex compliance landscapes
              in HR tech — HIPAA, insurance provider integrations, payroll systems, internal HR workflows, and federal government reporting.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Led team of 7 engineers; owned technical roadmap and architecture decisions</li>
              <li>Architected integrations across HIPAA-compliant data pipelines connecting insurance companies, payroll providers, HR systems, and federal reporting requirements</li>
              <li>Reduced cloud costs 20% by migrating from Heroku to AWS while maintaining HIPAA compliance</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Node.js, TypeScript, GraphQL, React, AWS</p>
          </div>

          {/* Radar */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">VP of Engineering</h3>
            <p className="font-mono text-[13px] mb-4">Radar Relay | Apr 2018 – Jun 2020 | Promoted from Senior Engineer &rarr; Director &rarr; VP</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              One of the earliest decentralized exchanges (DEX) on Ethereum — an open order book relayer built on the 0x protocol.
              Wallet-to-wallet, non-custodial trading with no accounts, no deposits, no trading limits.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Grew from IC to VP, managing 15 direct reports building decentralized trading infrastructure</li>
              <li>Shipped 4 technical strategies aligned with SEC compliance requirements — navigating novel regulatory territory for tokenized asset trading</li>
              <li>Built the engineering architecture for 0x protocol integration, smart DEX routing, multi-liquidity source aggregation (Uniswap, Kyber, Curve), and margin trading via dYdX</li>
              <li>Collaborated with SEC on compliance frameworks for decentralized asset trading — one of the first teams to operate a DEX within a regulatory compliance model</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Node.js, TypeScript, GraphQL, Vue.js, React, Python, Golang, Ethereum, 0x Protocol, Hyperledger, AWS, GCP</p>
          </div>

          {/* TurboTenant */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Chief Technology Officer</h3>
            <p className="font-mono text-[13px] mb-4">TurboTenant | Oct 2016 – Apr 2018 | Fort Collins, CO</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              CTO for a property management SaaS platform for independent landlords — now serving 900K+ landlords nationwide.
              Full rental lifecycle: listing syndication (28+ sites), tenant screening (TransUnion), online applications,
              lease generation, rent collection, and maintenance management.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Managed 9 direct reports; owned technical roadmap, architecture, and hiring</li>
              <li>Introduced 3 new technologies driving 25% operational efficiency improvement</li>
              <li>Built the core platform infrastructure that still powers the product today</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">Node.js, React, Ruby, PostgreSQL, AWS</p>
          </div>

          {/* CommercialTribe */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl leading-[1.05] tracking-[-0.03em] mb-1">Senior Software Engineer &rarr; Director of R&D</h3>
            <p className="font-mono text-[13px] mb-4">CommercialTribe | Apr 2015 – Dec 2016 | Denver Metropolitan Area</p>
            <p className="text-lg leading-snug mb-4 max-w-[72ch]">
              Director of R&D for a sales enablement and LMS SaaS platform — helping enterprise sales teams shorten ramp
              times and boost quota attainment through video-based practice, coaching, and certification workflows.
            </p>
            <ul className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
              <li>Managed 12 engineers across 3 time zones; achieved 90% sprint completion rate</li>
              <li>Built WebRTC-based real-time video platform powering the core product</li>
              <li>Shipped React Native mobile application extending the platform to mobile-first sales workflows</li>
              <li>Led R&D on video analysis and coaching feedback features</li>
            </ul>
            <p className="mt-3 font-mono text-[12px] text-ink/70">WebRTC, React Native, React, Node.js, AWS</p>
          </div>

          {/* Earlier */}
          <div>
            <p className="text-[16px] text-ink/80 leading-snug">
              <strong className="text-ink font-semibold">Earlier:</strong> Software Engineer at Cadence & Cause · Software Developer / Product Owner at Levels Beyond (Reach Engine) · Developer at biemedia <span className="font-mono text-[13px] font-bold">(acquired)</span> · Engineer at Techstars/Pegcog <span className="font-mono text-[13px] font-bold">(acquired)</span> · Intern at Mozilla
            </p>
          </div>

        </div>
      </Section>

      {/* Technical Skills */}
      <Section n="04" label="Technical Skills">
        <ul className="space-y-4 text-[17px] leading-snug max-w-4xl">
          <li>
            <strong className="text-ink font-semibold">AI/ML & Prompt Engineering</strong>
            <span> — </span>
            LLMs, LoRA/PEFT fine-tuning, PyTorch, TensorFlow, OpenCV, Langchain/LangGraph, A2A, NLTK, prompt optimization, hallucination reduction, AI assistant/agent design, RAG architectures, GraphRAG, knowledge graphs, NL2SQL, computer vision, object detection, digital twins, CFD modeling, predictive modeling, MLflow, SageMaker/Bedrock, Azure OpenAI, Vertex, MLOps, model deployment, AI context portability, data sovereignty
          </li>
          <li>
            <strong className="text-ink font-semibold">Product Management</strong>
            <span> — </span>
            Product discovery, requirements definition, success metrics, stakeholder management, workflow design, adoption tracking, PMF validation, technical due diligence, Agile/Scrum, sprint planning, roadmap development
          </li>
          <li>
            <strong className="text-ink font-semibold">Languages</strong>
            <span> — </span>
            Python, TypeScript/JavaScript, Rust, Golang, Ruby, Scala, Swift, Kotlin
          </li>
          <li>
            <strong className="text-ink font-semibold">Frontend</strong>
            <span> — </span>
            React, Next.js, Svelte, React Native/Expo, Vue.js, AngularJS, D3.js
          </li>
          <li>
            <strong className="text-ink font-semibold">Backend</strong>
            <span> — </span>
            Node.js, Nest.js, GraphQL, REST APIs, PostgreSQL, MongoDB, Elasticsearch, Redis, Vector DBs, data pipelines, WebRTC, real-time streaming
          </li>
          <li>
            <strong className="text-ink font-semibold">Infrastructure & DevOps</strong>
            <span> — </span>
            AWS (SageMaker, Bedrock, Lambda, ECS/EKS, S3, RDS, DynamoDB, CloudFront, Route53, IAM, CloudWatch), GCP (Vertex AI, BigQuery, Cloud Run, GKE), Microsoft Azure, Kubernetes, Helm, Terraform, Docker, CI/CD, SOC2 compliance, Grafana, Prometheus
          </li>
          <li>
            <strong className="text-ink font-semibold">Blockchain</strong>
            <span> — </span>
            Ethereum, Hyperledger, Substrate/Rust protocols, SEC-compliant trading systems, cryptographic protocols, on-chain data storage, decentralized identity
          </li>
          <li>
            <strong className="text-ink font-semibold">Leadership</strong>
            <span> — </span>
            IC &rarr; Director &rarr; VP &rarr; CTO progression; teams scaled from 2 to 80+; up to 18 direct reports; 95% team satisfaction; high-trust remote-first and async engineering cultures; full-cycle technical recruiting; 3 successful exits; $0 to $50M ARR
          </li>
        </ul>
      </Section>

      {/* Open Source & Nonprofit Impact */}
      <Section n="05" label="Open Source & Nonprofit Impact">

        <div className="space-y-10 max-w-4xl">
          <div>
            <p className="text-xl leading-snug mb-8 max-w-4xl">
              <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">arus impact</a>
              <span> — </span>
              AI/ML infrastructure for nonprofits doing real impact work. Data pipelines, ML tools, and integration middleware — scoped for mission, not margin. 501(c)(3) focused, pro bono.
            </p>

            <h3 className="label border-t border-ink pt-2 mb-4">Featured Projects</h3>
            <ul className="space-y-3 text-[17px] leading-snug">
              <li>
                <a href="https://impact.arus.io/projects/bellingcat" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Bellingcat — OSINT Investigation Infrastructure</a>
                <span> — </span>
                Entity resolution, computer vision geolocation, and multilingual monitoring pipelines for open-source investigations supporting human rights accountability
              </li>
              <li>
                <a href="https://impact.arus.io/projects/reporters-without-borders" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Reporters Without Borders — Press Freedom Intelligence</a>
                <span> — </span>
                Automated violation monitoring, Press Freedom Index pipeline acceleration, and Journalism Trust Initiative (JTI) certification tooling
              </li>
              <li>
                <a href="https://impact.arus.io/projects/cyberpeace-institute" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">CyberPeace Institute — Cybersecurity Intelligence</a>
                <span> — </span>
                Scaling threat intelligence, volunteer matching, and cyber-resilience tooling from 240 NGOs to 10,000
              </li>
              <li>
                <a href="https://impact.arus.io/projects/data-pop-alliance" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Data-Pop Alliance — Humanitarian Early Warning</a>
                <span> — </span>
                Flood prediction pipelines, geospatial analytics, and humanitarian data infrastructure for climate-vulnerable communities
              </li>
              <li>
                <a href="https://impact.arus.io/projects/fairplay" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Fairplay — Children&rsquo;s Tech Accountability</a>
                <span> — </span>
                Automated dark pattern detection, platform policy monitoring, and COPPA compliance scanning for children&rsquo;s digital rights advocacy
              </li>
            </ul>
            <p className="mt-6">
              <a href="https://impact.arus.io/projects" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">&rarr; View all 11 projects</a>
            </p>
          </div>

          <div>
            <h3 className="label border-t border-ink pt-2 mb-4">Open Source Projects</h3>
            <ul className="space-y-3 text-[17px] leading-snug">
              <li>
                <a href="https://github.com/p5150j/bureau-of-synthetic-affairs" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Bureau of Synthetic Affairs</a>
                <span> — </span>
                AI-powered synthetic user research system that intercepts anonymous Reddit confessions, cross-references them with federal government data, and manufactures 19-dimension synthetic personas to validate product ideas
              </li>
              <li>
                <a href="https://github.com/p5150j/xerox-project" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">The Xerox Project</a>
                <span> — </span>
                Expert duplication via LoRA fine-tuning — ingests academic papers, clinical research, and domain expertise, then synthesizes LoRA-weighted personas that learned the field. 94.7% voice match on first subject
              </li>
              <li>
                <a href="https://github.com/p5150j/PRD-Executioner" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">PRD Executioner</a>
                <span> — </span>
                Multi-agent system that generates 50–300 synthetic user personas, has them brutally review your PRD, and surfaces hidden conflicts through multi-agent debates — all in under 5 minutes
              </li>
              <li>
                <a href="https://github.com/p5150j/Narwal" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:underline">Narwal</a>
                <span> — </span>
                Fully open-source social network built on user sovereignty and transparency, with ML-powered video content labeling and serverless content moderation
              </li>
            </ul>
            <p className="mt-6">
              <a href="https://github.com/p5150j" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">&rarr; View all repos</a>
            </p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section n="06" label="Education">
        <div className="max-w-4xl space-y-3">
          <p className="text-xl leading-snug">
            <strong className="text-ink font-semibold">Metropolitan State University of Denver</strong>
            <span> — </span>
            Dual BSA, Technical Communications & Computer Science (2009–2013)
          </p>
          <p className="text-[16px] text-ink/80 leading-snug">
            Grant writing for non-profits, Digital design. Activities: Mhdivine Club, Collegiate Entrepreneurship Organization.
          </p>
          <ul className="space-y-1.5 text-[17px] leading-snug">
            <li>Tutor GED and College prep to inner city and at-risk youth for <a href="http://mhdivine.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-1 hover:decoration-2">Mhdivine club</a></li>
            <li><strong className="font-semibold">Entrepreneur of the Year Award 2010</strong></li>
            <li>Volunteer work for <a href="http://www.soxplace.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] decoration-1 hover:decoration-2">Soxplace</a> with homeless teens (2009)</li>
          </ul>
        </div>
      </Section>

      {/* Certifications */}
      <Section n="07" label="Certifications & Licenses">
        <div className="max-w-3xl">
          <div className="space-y-2 text-[17px] leading-snug list-disc pl-5 marker:text-ink">
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>AWS Data Analytics</span>
              <span className="font-mono text-[12px] whitespace-nowrap">AWS · Feb 2020</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Data Science on Google Cloud Platform: Architecting Solutions</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Google · Feb 2020</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>AWS End User Computing Competency Partner</span>
              <span className="font-mono text-[12px] whitespace-nowrap">AWS · Dec 2019</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Ethereum: Building Blockchain Decentralized Apps</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Sep 2018</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Planning and Releasing Software with JIRA</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Sep 2018</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>GraphQL Essential Training</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Feb 2018</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Elasticsearch Essential Training</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Jan 2018</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Blockchain: Beyond the Basics</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Dec 2017</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>Expert Scrum Master Certified (ESMC)</span>
              <span className="font-mono text-[12px] whitespace-nowrap">Mountain Goat · Jan 2014</span>
            </div>
            <div className="flex justify-between items-baseline gap-4 border-b border-ink/30 pb-2">
              <span>M101JS: MongoDB for Node.js</span>
              <span className="font-mono text-[12px] whitespace-nowrap">MongoDB University · Aug 2013</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Honors & Awards */}
      <Section n="08" label="Honors & Awards">
        <ul className="space-y-3 text-[17px] leading-snug max-w-4xl divide-y divide-ink/30 [&>li]:pt-3 [&>li:first-child]:pt-0">
          <li>
            <strong className="text-ink font-semibold">Techstars All Star Mentor</strong>
            <span> — </span>
            3 consecutive years (2023, 2024, 2025)
          </li>
          <li>
            <strong className="text-ink font-semibold">Entrepreneur of the Year Award</strong>
            <span> — </span>
            Metropolitan State College of Denver (2010)
          </li>
        </ul>
      </Section>

      {/* Volunteering & Community */}
      <Section n="09" label="Volunteering & Community">
        <ul className="space-y-3 text-[17px] leading-snug max-w-4xl divide-y divide-ink/30 [&>li]:pt-3 [&>li:first-child]:pt-0">
          <li>
            <strong className="text-ink font-semibold">Code for America</strong>
            <span> — </span>
            FOCO Chapter (Jun 2016 – Present, 9+ years) — Using technology to solve everyday challenges for nonprofits, schools, government, and grassroots organizations in Fort Collins
          </li>
          <li>
            <strong className="text-ink font-semibold">Youth Hackathon Mentor</strong>
            <span> — </span>
            Poudre School District (Sep 2016 – Present, 9+ years) — Mentoring students building apps for mental health, nutrition, and physical activity
          </li>
          <li>
            <strong className="text-ink font-semibold">Mentor</strong>
            <span> — </span>
            Sox Place (Jan 2008 – Sep 2009) — Drop-in center for homeless youth in Denver; meal prep, GED teaching, one-on-one counseling
          </li>
        </ul>
      </Section>

      {/* Recommendations */}
      <Section n="10" label="What people say">

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;He will not say what you want to hear, but need to hear. Forging a solution
              that is fit for the task with as little ego as possible. Because he can cut through the noise.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Ben Niehaus, CTO at SpexAI
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick brought a rare combination of deep technical expertise — especially in AI —
              and a broad command of web3, crypto, wallets, and blockchain systems. His ability to
              translate complex systems into clear product direction was invaluable.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Kenne Ives, Head of Product at Project Liberty
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick was one of our mentors at Techstars and easily the most impactful.
              He has this rare ability to immediately understand a problem and zero in on
              smart, scrappy ways to solve it. He even jumped in to support our first AI/ML hire,
              from assessment to onboarding.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Larissa Licha, Product Director, AI Context & Memory at Miro
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick didn&rsquo;t just recite technical facts. He translated ML intricacies into
              choices that fit our product and resource constraints. If you need someone who can
              make real impact in ambiguous, high-stakes environments, Patrick is the person you
              want in your corner.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Corbin Long, Product at Amplica Labs
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;He can be anything you need him to be. Architect, developer, product shepherd,
              teacher, organizer, leader. A bottomless well of skills. I believe he&rsquo;s the best
              CTO in Colorado and the first stop for me on any technology endeavor.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Robert Schachte, Co-Founder at HYVV
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick has a unique character mix between setting and maintaining high standards
              and an overall roll-with-it attitude that positively imprints on a team. Integrity,
              attention to detail, commitment to deadlines, quality are a handful of traits that
              represent Patrick.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Paul Ironside, CEO at CommercialTribe
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick is a total pro. There is no project too big or too small for this guy.
              He always goes above and beyond and delivers on time — usually more than what
              I&rsquo;ve asked for. I would jump at the opportunity to hire Patrick again in a heartbeat.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Charisse Bowen, PMP — Vice President, Federal Services
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick is an incredibly talented professional, who not only delivers industry expertise
              to projects, but also contributes to an inclusive work culture. With a creative mindset and
              an ability to think outside the box, working with Patrick is a true privilege.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Krystallin Baker, CCMP — Creative Strategist & Brand Storyteller
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick is a visionary when it comes to solving difficult tech-related problems.
              He understands the needs of the users and the limitations/opportunities surrounding how
              to build an effective solution. It&rsquo;s not often you find a DEV that puts this much thought
              into the how and why a product is needed.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Paul Ronto
            </footer>
          </blockquote>

          <blockquote className="border-t border-ink pt-3 space-y-3">
            <p className="text-xl leading-snug tracking-[-0.01em] font-medium">
              &ldquo;Patrick is a true champion of ideas and creative innovation. He uses multiple technologies
              to create new and innovative applications and designs. With a high level of knowledge and
              understanding of web based technologies, and a side of creative genius, he makes an excellent
              addition to any organization.&rdquo;
            </p>
            <footer className="font-mono text-[13px] font-bold">
              Keith Kacsh, Principal DevOps Engineer
            </footer>
          </blockquote>
        </div>
      </Section>

      <Contact n="11" />
      <Footer />
    </main>
  );
}
