import Section from '@/components/Section';

/**
 * Two-lane "work with me": senior roles on one side, advisory on the other.
 * Same weight for both. Availability lives in the homepage "Now" block, not here.
 */
export default function Contact() {
  return (
    <Section id="contact" label="Work with me" title={<>Two ways this <em className="italic text-accent">usually</em> goes.</>}>
      <p className="text-xl text-muted leading-relaxed mb-12 max-w-2xl">
        Days, I&apos;m architecting enterprise AI infrastructure at myCOI. Beyond that, I still advise
        early-stage founders — AI strategy, architecture reviews, technical due diligence, hiring.
        If you&apos;ve got a hard problem, let&apos;s talk.
      </p>

      <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
        <div className="bg-ink p-8 md:p-10 flex flex-col">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-faint mb-5">Senior roles</div>
          <h3 className="font-serif text-3xl leading-tight text-paper mb-4">VP Engineering, CTO, Head of AI Platform.</h3>
          <p className="text-muted leading-relaxed mb-8 flex-1">
            Companies that need someone who has shipped AI in production, run the org, and sat through
            the diligence. Remote-first, as always.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/resume" className="px-6 py-3 bg-paper text-ink font-semibold rounded hover:bg-accent transition-colors">
              Read the resume
            </a>
            <a href="mailto:patrick.ortell@arus.io" className="px-6 py-3 text-muted hover:text-paper transition-colors">
              patrick.ortell@arus.io
            </a>
          </div>
        </div>

        <div className="bg-ink p-8 md:p-10 flex flex-col">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-faint mb-5">Advisory</div>
          <h3 className="font-serif text-3xl leading-tight text-paper mb-4">A few hours a month. No chaos.</h3>
          <p className="text-muted leading-relaxed mb-8 flex-1">
            Founders who want a straight answer on what to build, what to skip, and what to fix.
            LLM strategy, architecture reviews, technical due diligence, hiring your first ML engineer.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-paper text-ink font-semibold rounded hover:bg-accent transition-colors"
            >
              Book a 30-min intro call
            </a>
            <a
              href="https://linkedin.com/in/patrickortell"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-muted hover:text-paper transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
