import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FlowDiagram from '@/components/FlowDiagram';
import { getAllPosts } from '@/lib/posts';
import { caseStudies, recentRoles, stats, testimonials } from '@/lib/site-data';

const relationLabel: Record<string, string> = {
  colleague: 'Worked together',
  'founder mentored': 'Founder · mentored at Techstars',
  founder: 'Founder',
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="bg-ink min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12 items-start">
        <div className="md:col-span-7">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-paper mb-10">
            I build and lead the engineering teams that <em className="italic text-accent">ship</em> AI.
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
            <p>
              14 years building software. Three exits. Teams scaled from two to 80+. Products from $0 to $50M ARR.
            </p>
            <p>
              VP Engineering, CTO, Technical AI Product Manager. Currently architecting
              enterprise AI infrastructure at myCOI — in-house LLM fine-tuning, GraphRAG,
              and model serving that never lets data leave the building.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-7 py-4 bg-paper text-ink text-lg font-semibold rounded hover:bg-accent transition-colors"
            >
              See the work
            </a>
            <a
              href="/resume"
              className="px-7 py-4 border border-rule text-paper text-lg rounded hover:border-paper transition-colors"
            >
              Full resume
            </a>
            <a
              href="mailto:patrick.ortell@arus.io"
              className="px-2 py-4 text-muted text-lg hover:text-paper transition-colors"
            >
              patrick.ortell@arus.io
            </a>
          </div>
        </div>

        <aside className="md:col-span-5 md:pl-6">
          <div className="relative">
            <Image
              src="/patrick-v3.jpg"
              alt="Patrick Ortell"
              width={480}
              height={600}
              priority
              className="w-full max-w-sm md:max-w-none aspect-[4/5] object-cover rounded"
            />
          </div>

          {/* Now */}
          <div className="mt-6 border border-rule rounded p-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Now</span>
              <span className="font-mono text-xs text-faint">September 2026</span>
            </div>
            <ul className="space-y-2.5 text-[15px] text-muted leading-relaxed">
              <li>Architecting the in-house AI platform at myCOI / Illumend.</li>
              <li>Advising a handful of early-stage AI companies.</li>
              <li>Mentoring at Techstars, fourth year.</li>
              <li className="text-paper">Taking conversations about senior AI leadership roles and new advisory work.</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Selected work */}
      <Section
        id="work"
        label="Selected work"
        title={<>Four systems, and what they <em className="italic">actually</em> did.</>}
      >
        <div className="space-y-20">
          {caseStudies.map((cs) => (
            <article key={cs.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6">
              <div className="lg:col-span-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint mb-3">{cs.context}</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight text-paper mb-5">{cs.title}</h3>
                <p className="text-lg text-muted leading-relaxed max-w-3xl">{cs.summary}</p>
              </div>

              <div className="lg:col-span-12 border border-rule rounded bg-paper/[0.02] overflow-x-auto">
                <div className="min-w-[680px] p-5 md:p-7">
                  <FlowDiagram stages={cs.diagram.stages} boundary={cs.diagram.boundary} title={cs.title} />
                </div>
              </div>

              <div className="lg:col-span-8">
                <ul className="space-y-2.5">
                  {cs.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-muted leading-relaxed">
                      <span className="text-accent mt-[3px] shrink-0">—</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 space-y-4">
                <p className="font-mono text-xs leading-relaxed text-faint">{cs.stack}</p>
                {cs.link && (
                  <Link
                    href={cs.link.href}
                    className="inline-block font-mono text-sm text-paper underline decoration-rule underline-offset-4 hover:decoration-accent"
                  >
                    {cs.link.label} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* What I do */}
      <Section label="What I do" title={<>The five things I keep getting hired for.</>}>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-10 text-lg text-muted">
          <li>
            <strong className="text-paper font-semibold block mb-2">Ship AI/ML in production</strong>
            First agentic AI assistant in AgTech, a full year ahead of any competitor. RAG over 2,000+ academic studies. Custom PyTorch + OpenCV computer vision pipelines. 70% support cost reduction via LLM automation. 85% fewer production incidents through MLOps discipline.
          </li>
          <li>
            <strong className="text-paper font-semibold block mb-2">Lead engineering teams</strong>
            IC → Director → VP → CTO across five companies. Up to 18 direct reports. 95% team satisfaction. 100% on-time delivery, eight consecutive quarters. Remote-first, async, no chaos.
          </li>
          <li>
            <strong className="text-paper font-semibold block mb-2">Scale companies</strong>
            Three acquisitions. $0 to $50M ARR. Teams from two to 80+. I&apos;ve been in the room for the fundraises, the diligence, and the integrations.
          </li>
          <li>
            <strong className="text-paper font-semibold block mb-2">Own architecture & infrastructure</strong>
            AWS, GCP, Azure, Kubernetes, Terraform. Cloud migrations, SOC2 audits, HIPAA-compliant data pipelines, NFT marketplaces on Flow, decentralized exchanges on Ethereum, Rust protocol work on Substrate.
          </li>
          <li className="md:col-span-2 max-w-3xl">
            <strong className="text-paper font-semibold block mb-2">Drive product & roadmap</strong>
            Technical Product Manager for Frequency Protocol and SpexAI. PMF validation, roadmap development, sprint planning, technical due diligence. I&apos;ve been CPO and TPM — I know how to write user stories engineers don&apos;t hate.
          </li>
        </ul>
      </Section>

      {/* By the numbers */}
      <Section label="By the numbers">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink p-6 md:p-8">
              <div className="font-serif text-5xl md:text-6xl leading-none text-paper mb-3">{s.value}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Recently */}
      <Section label="Recently" title={<>Where the last few years went.</>}>
        <div className="divide-y divide-rule">
          {recentRoles.map((r) => (
            <div key={r.org} className="grid md:grid-cols-12 gap-x-8 gap-y-3 py-8 first:pt-0 last:pb-0">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight text-paper">
                  {r.org}
                  {r.acquired && (
                    <span className="ml-2 font-mono text-xs uppercase tracking-[0.18em] text-accent align-middle">acquired</span>
                  )}
                </h3>
                <p className="mt-2 font-mono text-xs text-faint leading-relaxed">
                  {r.title}
                  <br />
                  {r.dates}
                </p>
              </div>
              <p className="md:col-span-8 text-lg text-muted leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="/resume" className="font-mono text-sm text-muted hover:text-paper transition-colors">
            → Full resume, back to 2010
          </a>
        </div>
      </Section>

      {/* Writing */}
      <Section label="Writing" title={<>Notes from building the thing.</>}>
        <div className="divide-y divide-rule">
          {posts.map((post) => (
            <article key={post.slug} className="py-7 first:pt-0 last:pb-0 grid md:grid-cols-12 gap-x-8 gap-y-2">
              <time className="md:col-span-3 font-mono text-xs text-faint pt-2">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <div className="md:col-span-9">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-paper group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted leading-relaxed mb-3">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint border border-rule rounded px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/blog" className="font-mono text-sm text-muted hover:text-paper transition-colors">
            → All posts
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section label="What people say" title={<>From the people who&apos;ve had to work with me.</>}>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-4">
                {relationLabel[t.relation]}
              </span>
              <p className="font-serif text-2xl md:text-[1.7rem] leading-snug text-paper/90 mb-5 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm">
                <span className="text-accent font-mono">{t.name}</span>
                <span className="text-faint"> · {t.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section label="About" title={<>Hi, I&apos;m Patrick.</>}>
        <div className="space-y-6 text-xl text-muted leading-relaxed max-w-3xl">
          <p>
            I&apos;ve been CTO, VP Engineering, CPO, Technical Product Owner.
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
            I&apos;m a <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-rule underline-offset-4 hover:decoration-accent">Techstars</a> All Star Mentor (three years running). Off the clock I do pro bono AI/ML work for nonprofits at <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-rule underline-offset-4 hover:decoration-accent">arus impact</a> — Bellingcat, Reporters Without Borders, CyberPeace Institute.
          </p>
          <p className="text-faint">
            Fort Collins, Colorado. Working remote, like always.
          </p>
        </div>
      </Section>

      <Contact />
      <Footer />
    </main>
  );
}
