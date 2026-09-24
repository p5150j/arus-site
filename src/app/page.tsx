import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getAllPosts } from '@/lib/posts';
import { recentRoles, stats, testimonials } from '@/lib/site-data';

const relationLabel: Record<string, string> = {
  colleague: 'Worked together',
  'founder mentored': 'Founder · mentored at Techstars',
  founder: 'Founder',
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="bg-yellow text-ink min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-site px-5 md:px-10 pt-10 md:pt-16 pb-14 md:pb-20 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
        <h1 className="md:col-span-8 font-black text-[clamp(64px,19vw,96px)] md:text-[clamp(96px,10.5vw,160px)] leading-[0.86] tracking-[-0.045em] self-end">
          Patrick<br />Ortell
        </h1>

        {/* Now */}
        <ul className="md:col-span-4 text-[15px] leading-snug self-end">
          <li className="label border-t border-ink pt-2 pb-2 flex justify-between">
            <span>Now</span><span>September 2026</span>
          </li>
          <li className="border-b border-ink/40 py-1.5">Architecting the in-house AI platform at myCOI / Illumend.</li>
          <li className="border-b border-ink/40 py-1.5">Advising a handful of early-stage AI companies.</li>
          <li className="border-b border-ink/40 py-1.5">Mentoring at Techstars, fourth year.</li>
          <li className="border-b border-ink/40 py-1.5 font-semibold">Taking conversations about senior AI leadership roles and new advisory work.</li>
        </ul>

        <div className="md:col-span-12 grid md:grid-cols-12 gap-x-6 gap-y-5 text-xl md:text-[21px] leading-snug tracking-[-0.01em]">
          <p className="md:col-span-4">
            <strong className="font-semibold">I build and lead the engineering teams that ship AI.</strong>{' '}
            14 years building software. Three exits. Teams scaled from two to 80+. Products from $0 to $50M ARR.
          </p>
          <p className="md:col-span-4">
            VP Engineering, CTO, Technical AI Product Manager. Currently architecting
            enterprise AI infrastructure at myCOI — in-house LLM fine-tuning, GraphRAG,
            and model serving that never lets data leave the building.
          </p>
          <div className="md:col-span-4 flex flex-wrap md:flex-col md:items-start gap-x-7 gap-y-3 text-lg font-semibold md:pl-6 md:border-l md:border-ink">
            <a href="/resume" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Full resume</a>
            <a href="#contact" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Work with me</a>
            <a href="mailto:patrick.ortell@arus.io" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">patrick.ortell@arus.io</a>
          </div>
        </div>
      </section>

      {/* 01 Recently */}
      <Section n="01" label="Recently">
        <div>
          {recentRoles.map((r, i) => (
            <div
              key={r.org}
              className={`grid grid-cols-1 md:grid-cols-10 gap-x-6 gap-y-3 py-6 ${i > 0 ? 'border-t border-ink' : 'pt-0'}`}
            >
              <div className="md:col-span-3">
                <h3 className="font-bold text-2xl md:text-[26px] leading-[1.05] tracking-[-0.02em]">
                  {r.org}
                  {r.acquired && (
                    <span className="label ml-2 border-[1.5px] border-ink px-1.5 py-px align-middle">acquired</span>
                  )}
                </h3>
                <p className="font-mono text-[13px] leading-snug mt-2 opacity-80">
                  {r.title}
                  <br />
                  {r.dates}
                </p>
              </div>
              <p className="md:col-span-6 text-[17px] leading-snug">{r.body}</p>
            </div>
          ))}
          <div className="mt-6">
            <a href="/resume" className="text-lg font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">
              Full resume, back to 2010 →
            </a>
          </div>
        </div>
      </Section>

      {/* 02 What I do */}
      <Section n="02" label="What I do">
        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8">
          <li className="border-t border-ink pt-3">
            <strong className="block font-bold text-2xl leading-tight tracking-[-0.02em] mb-2">Ship AI/ML in production</strong>
            <span className="text-[17px] leading-snug block">First agentic AI assistant in AgTech, a full year ahead of any competitor. RAG over 2,000+ academic studies. Custom PyTorch + OpenCV computer vision pipelines. 70% support cost reduction via LLM automation. 85% fewer production incidents through MLOps discipline.</span>
          </li>
          <li className="border-t border-ink pt-3">
            <strong className="block font-bold text-2xl leading-tight tracking-[-0.02em] mb-2">Lead engineering teams</strong>
            <span className="text-[17px] leading-snug block">IC → Director → VP → CTO across five companies. Up to 18 direct reports. 95% team satisfaction. 100% on-time delivery, eight consecutive quarters. Remote-first, async, no chaos.</span>
          </li>
          <li className="border-t border-ink pt-3">
            <strong className="block font-bold text-2xl leading-tight tracking-[-0.02em] mb-2">Scale companies</strong>
            <span className="text-[17px] leading-snug block">Three acquisitions. $0 to $50M ARR. Teams from two to 80+. I&apos;ve been in the room for the fundraises, the diligence, and the integrations.</span>
          </li>
          <li className="border-t border-ink pt-3">
            <strong className="block font-bold text-2xl leading-tight tracking-[-0.02em] mb-2">Own architecture & infrastructure</strong>
            <span className="text-[17px] leading-snug block">AWS, GCP, Azure, Kubernetes, Terraform. Cloud migrations, SOC2 audits, HIPAA-compliant data pipelines, NFT marketplaces on Flow, decentralized exchanges on Ethereum, Rust protocol work on Substrate.</span>
          </li>
          <li className="border-t border-ink pt-3 md:col-span-2 md:max-w-[calc(50%-12px)]">
            <strong className="block font-bold text-2xl leading-tight tracking-[-0.02em] mb-2">Drive product & roadmap</strong>
            <span className="text-[17px] leading-snug block">Technical Product Manager for Frequency Protocol and SpexAI. PMF validation, roadmap development, sprint planning, technical due diligence. I&apos;ve been CPO and TPM — I know how to write user stories engineers don&apos;t hate.</span>
          </li>
        </ul>
      </Section>

      {/* 03 By the numbers */}
      <Section n="03" label="By the numbers">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`pb-6 mb-6 ${i % 2 === 1 ? 'border-l border-ink pl-4' : ''} ${i % 4 !== 0 ? 'md:border-l md:border-ink md:pl-5' : 'md:border-l-0 md:pl-0'}`}
            >
              <b className="block font-black text-[15vw] md:text-[6vw] leading-[0.9] tracking-[-0.045em]">{s.value}</b>
              <span className="label block mt-3">{s.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Writing */}
      <Section n="04" label="Writing">
        <div>
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group grid grid-cols-1 md:grid-cols-10 gap-x-6 gap-y-1 py-4 ${i > 0 ? 'border-t border-ink' : 'pt-0'}`}
            >
              <time className="md:col-span-2 font-mono text-[13px] self-center">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <span className="md:col-span-6">
                <span className="block text-xl md:text-[22px] leading-tight tracking-[-0.015em] font-semibold group-hover:underline underline-offset-4">{post.title}</span>
                <span className="block text-[15px] leading-snug mt-1 opacity-80">{post.description}</span>
              </span>
              <span className="md:col-span-2 font-mono text-[12px] self-center md:text-right">
                {(post.tags ?? []).join(' · ')}
              </span>
            </Link>
          ))}
          <div className="mt-6">
            <Link href="/blog" className="text-lg font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">
              All posts →
            </Link>
          </div>
        </div>
      </Section>

      {/* 05 What people say */}
      <Section n="05" label="What people say">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border-t border-ink pt-3">
              <span className="label block mb-3">{relationLabel[t.relation]}</span>
              <p className="text-xl md:text-[22px] leading-snug tracking-[-0.01em] font-medium mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer className="font-mono text-[13px]">
                <span className="font-bold">{t.name}</span> · {t.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* 06 About */}
      <Section n="06" label="About">
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-5 text-xl md:text-[21px] leading-snug tracking-[-0.01em]">
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
            I&apos;m a <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Techstars</a> All Star Mentor (three years running). Off the clock I do pro bono AI/ML work for nonprofits at <a href="https://impact.arus.io" target="_blank" rel="noopener noreferrer" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">arus impact</a> — Bellingcat, Reporters Without Borders, CyberPeace Institute.
          </p>
          <p className="font-mono text-[15px] self-end">
            Fort Collins, Colorado. Working remote, like always.
          </p>
        </div>
      </Section>

      <Contact n="07" />
      <Footer />
    </main>
  );
}
