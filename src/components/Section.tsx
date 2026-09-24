import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  /** Two-digit serial, e.g. "01". */
  n: string;
  label: string;
  children: ReactNode;
  className?: string;
}

/**
 * Poster section: a 2px rule, a big serial number and mono label in the
 * left two columns, content in the remaining ten. Stacks on mobile.
 */
export default function Section({ id, n, label, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`border-t-2 border-ink ${className}`}>
      <div className="mx-auto max-w-site px-5 md:px-10 pt-5 pb-14 md:pt-6 md:pb-20 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6">
        <div className="md:col-span-2 flex md:block items-baseline gap-4">
          <span className="block font-black text-5xl md:text-6xl leading-[0.9] tracking-[-0.04em]">{n}</span>
          <span className="label block md:mt-3">{label}</span>
        </div>
        <div className="md:col-span-10">{children}</div>
      </div>
    </section>
  );
}
