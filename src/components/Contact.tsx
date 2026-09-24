import Section from '@/components/Section';

interface ContactProps {
  n?: string;
}

/**
 * Two equal lanes: senior roles and advisory. Same weight for both.
 * Availability is stated in the homepage "Now" block, not here.
 */
export default function Contact({ n = '07' }: ContactProps) {
  return (
    <Section id="contact" n={n} label="Work with me">
      <p className="text-xl md:text-2xl leading-snug tracking-[-0.01em] max-w-3xl mb-12">
        Days, I&apos;m architecting enterprise AI infrastructure at myCOI. Beyond that, I still advise
        early-stage founders — AI strategy, architecture reviews, technical due diligence, hiring.
        If you&apos;ve got a hard problem, let&apos;s talk.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        <div className="border-t border-ink pt-4">
          <span className="label block mb-3">Senior roles</span>
          <h3 className="font-black text-4xl md:text-5xl leading-[0.95] tracking-[-0.04em] mb-5">VP Engineering. CTO. Head of AI Platform.</h3>
          <p className="text-lg leading-snug max-w-[40ch] mb-6">
            Companies that need someone who has shipped AI in production, run the org, and sat through
            the diligence. Remote-first, as always.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-lg font-semibold">
            <a href="/resume" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Read the resume</a>
            <a href="mailto:patrick.ortell@arus.io" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">patrick.ortell@arus.io</a>
          </div>
        </div>

        <div className="border-t border-ink pt-4">
          <span className="label block mb-3">Advisory</span>
          <h3 className="font-black text-4xl md:text-5xl leading-[0.95] tracking-[-0.04em] mb-5">A few hours a month. No chaos.</h3>
          <p className="text-lg leading-snug max-w-[40ch] mb-6">
            Founders who want a straight answer on what to build, what to skip, and what to fix.
            LLM strategy, architecture reviews, technical due diligence, hiring your first ML engineer.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-lg font-semibold">
            <a
              href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors"
            >
              Book a 30-min intro call
            </a>
            <a
              href="https://linkedin.com/in/patrickortell"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
