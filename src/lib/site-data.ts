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
