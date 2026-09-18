import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  /** Small mono label shown in the left rail on desktop. */
  label: string;
  /** Optional large heading rendered above the content. */
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Two-column editorial section: a narrow mono label rail on the left,
 * content on the right. Stacks on mobile.
 */
export default function Section({ id, label, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`border-t border-rule ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-28 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {label}
          </div>
        </div>
        <div className="md:col-span-9">
          {title && (
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-paper mb-10">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
