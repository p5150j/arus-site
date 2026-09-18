// Shared site content. Homepage reads from here; resume page still has its
// own copy for now (prototype scope) and can be pointed here later.

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  /** How this person knows Patrick. Lets both audiences find "their" quotes. */
  relation: 'colleague' | 'founder mentored' | 'founder' ;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'He will not say what you want to hear, but need to hear. Forging a solution that is fit for the task with as little ego as possible.',
    name: 'Ben Niehaus',
    title: 'CTO at SpexAI',
    relation: 'colleague',
  },
  {
    quote:
      'Patrick was one of our mentors at Techstars and easily the most impactful. He has this rare ability to immediately understand a problem and zero in on smart, scrappy ways to solve it.',
    name: 'Larissa Licha',
    title: 'Product Director, AI Context & Memory at Miro',
    relation: 'founder mentored',
  },
  {
    quote:
      "He can be anything you need him to be. Architect, developer, product shepherd, teacher, organizer, leader... I believe he's the best CTO in Colorado.",
    name: 'Robert Schachte',
    title: 'Co-Founder at HYVV',
    relation: 'founder',
  },
  {
    quote:
      "Patrick didn't just recite technical facts. He translated ML intricacies into choices that fit our product and resource constraints, helping us stay focused and move fast, even during pivots.",
    name: 'Corbin Long',
    title: 'Product at Amplica Labs',
    relation: 'colleague',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '3', label: 'Exits' },
  { value: '$50M', label: 'ARR grown from $0' },
  { value: '80+', label: 'Team peak (from 2)' },
  { value: '14yr', label: 'Shipping software' },
  { value: '100%', label: 'On-time, 8 quarters' },
  { value: '-85%', label: 'Production incidents' },
  { value: '-70%', label: 'Support cost via LLMs' },
  { value: '-60%', label: 'MTTR' },
];

export interface Role {
  org: string;
  title: string;
  dates: string;
  acquired?: boolean;
  body: string;
}

export const recentRoles: Role[] = [
  {
    org: 'myCOI / Illumend',
    title: 'AI Infrastructure & Platform Architect (Consultant)',
    dates: 'Jan 2026 – Present',
    body:
      'Architecting the in-house AI platform for an enterprise insurance-compliance company. LoRA fine-tuning pipelines on open-source foundation models that replicate subject-matter experts across complex policy lines, hybrid GraphRAG over massive corporate repositories, and locally-served models with 100% PII containment — no vendor lock-in, zero external data transmission.',
  },
  {
    org: 'Project Liberty — Frequency Protocol',
    title: 'Technical Product Manager',
    dates: 'Nov 2022 – Nov 2025',
    body:
      'Directed an 11-engineer distributed team across 4 time zones building a Rust-based decentralized social protocol. Shipped on-chain LLM context portability, a B2B consent-based data marketplace, and Rust PII security nodes. Eight consecutive quarters of 100% on-time delivery.',
  },
  {
    org: 'SpexAI',
    title: 'ML Engineer & Product Owner',
    dates: 'Sep 2022 – Mar 2025',
    acquired: true,
    body:
      'Led the full AI/ML portfolio for an enterprise AgTech platform. Shipped the first agentic AI assistant in AgTech a full year ahead of any competitor. Built RAG over 2,000+ academic studies, custom PyTorch + OpenCV CV pipelines, and Langchain agents for NL-to-SQL across greenhouse operations. Cut support costs 70%, production incidents 85%.',
  },
  {
    org: 'Techstars',
    title: 'All Star Mentor',
    dates: 'Jun 2023 – Present',
    body:
      'All Star Mentor three years running. Pro bono lead mentor for early-stage AI companies — model evaluation, RAG architectures, technical hiring, SOC2 prep. Built the automated technical and product due diligence pipelines Techstars uses to grade program applicants.',
  },
];

export interface DiagramStage {
  label: string;
  sub?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  context: string; // role · org · dates
  summary: string;
  outcomes: string[];
  stack: string;
  diagram: {
    stages: DiagramStage[];
    /** Optional dashed boundary drawn around stages [from, to] (inclusive, 0-indexed). */
    boundary?: { from: number; to: number; label: string };
  };
  link?: { href: string; label: string; external?: boolean };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mycoi-platform',
    title: 'An enterprise AI platform that never lets data leave the building',
    context: 'AI Infrastructure & Platform Architect · myCOI / Illumend · 2026–present',
    summary:
      'Insurance compliance runs on subject-matter experts reading dense policy documents. The platform replicates those experts with LoRA adapters on open-source foundation models, grounds them with hybrid GraphRAG over massive corporate repositories, and serves everything on local hardware so PII never crosses the company boundary.',
    outcomes: [
      'LoRA/PEFT fine-tuning pipelines replicating SMEs across complex policy lines, no vendor lock-in',
      'High-throughput hybrid knowledge-graph + RAG with distributed vector storage',
      '100% PII containment, zero external data transmission',
      'Executive consulting on GPU capacity planning and the enterprise AI roadmap',
    ],
    stack: 'LoRA/PEFT · open-source LLMs · GraphRAG · knowledge graphs · distributed vector DBs · bare-metal GPU serving',
    diagram: {
      stages: [
        { label: 'Corporate repos', sub: 'policies, claims, docs' },
        { label: 'Knowledge graph', sub: '+ vector index' },
        { label: 'GraphRAG', sub: 'hybrid retrieval' },
        { label: 'Local serving', sub: 'base model + LoRA' },
        { label: 'Compliance teams' },
      ],
      boundary: { from: 0, to: 3, label: 'inside the company boundary' },
    },
  },
  {
    slug: 'spexai-copilot',
    title: 'The first agentic AI assistant in AgTech',
    context: 'ML Engineer & Product Owner · SpexAI (acquired) · 2022–2025',
    summary:
      'Greenhouse growers were drowning in sensor data and academic literature. We shipped an agentic copilot a full year before any competitor: RAG over 2,000+ plant-science studies, Langchain agents that turn plain English into cross-domain SQL, and a PyTorch + OpenCV pipeline reading spectral cameras for mold, disease, and transpiration.',
    outcomes: [
      '70% support cost reduction via LLM automation',
      '85% fewer production incidents through MLOps discipline',
      '30% ML model performance improvement',
      'Predictive models and digital twins wired into PRIVA controls and CFD',
    ],
    stack: 'Python · PyTorch · OpenCV · GPT-4 · Azure OpenAI · Langchain · NLTK · SageMaker · Kubernetes · MLflow',
    diagram: {
      stages: [
        { label: 'Spectral cameras', sub: '+ sensors' },
        { label: 'CV pipeline', sub: 'PyTorch / OpenCV' },
        { label: 'RAG', sub: '2,000+ studies' },
        { label: 'Agents', sub: 'NL → SQL' },
        { label: 'Grower copilot' },
      ],
    },
  },
  {
    slug: 'frequency-protocol',
    title: 'Shipping a Rust protocol on time for eight straight quarters',
    context: 'Technical Product Manager · Project Liberty / Frequency · 2022–2025',
    summary:
      'Frequency is a decentralized social protocol built in Rust. I owned delivery for an 11-engineer team across four time zones and led the AI/ML track: storing LLM conversation context on-chain so it is portable between vendors, a consent-based B2B data marketplace, and Rust daemons that let users stop PII leaking to data brokers.',
    outcomes: [
      '100% on-time delivery across 8 consecutive quarters, 4 major protocol releases',
      '60% MTTR reduction with a Grafana/Prometheus observability framework',
      'On-chain LLM context portability, vendor-agnostic',
      'Rust PII security nodes with real-time user control',
    ],
    stack: 'Rust · TypeScript · Svelte · AWS · Kubernetes · Terraform · GraphQL · GPT/Claude/Phi · on-chain storage',
    diagram: {
      stages: [
        { label: 'LLM sessions', sub: 'any vendor' },
        { label: 'Context store', sub: 'on Frequency chain' },
        { label: 'Consent layer', sub: 'B2B marketplace' },
        { label: 'PII nodes', sub: 'Rust daemons' },
        { label: 'User' },
      ],
    },
  },
  {
    slug: 'xerox-project',
    title: 'Persona sketch to fine-tuned local expert in ten minutes',
    context: 'Open source · The Xerox Project · 2025',
    summary:
      'A 50-line persona file goes in. Claude researches the domain with live web search, BAML forces the synthesized Q&A into typed training examples, and QLoRA fine-tunes Mistral-7B into a 50MB adapter that answers from internalized knowledge instead of a system prompt. Runs locally, costs nothing per query.',
    outcomes: [
      'Automated research → synthesis → training → evaluation pipeline',
      'Up to 500 voice-matched, research-grounded training pairs per subject',
      'QLoRA in 2–5 minutes on an RTX 4090, ~50MB output',
      '94.7% voice match on the first subject',
    ],
    stack: 'Claude + web search · BAML · Mistral-7B · QLoRA · PyTorch · bitsandbytes',
    diagram: {
      stages: [
        { label: 'Persona', sub: '50 lines' },
        { label: 'Research', sub: 'live web search' },
        { label: 'Synthesis', sub: 'typed via BAML' },
        { label: 'QLoRA', sub: 'Mistral-7B' },
        { label: 'Local expert', sub: '50MB adapter' },
      ],
    },
    link: { href: '/blog/lora-fine-tuning-domain-expert-ai', label: 'Read the full breakdown' },
  },
];
