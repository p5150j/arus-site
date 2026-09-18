import Link from 'next/link';

/**
 * Static top bar. Always yellow, so paper pages still open under the
 * same band. Twelve-column grid matches the sections below it.
 */
export default function Header() {
  return (
    <header className="bg-yellow text-ink border-t-2 border-b border-ink">
      <div className="mx-auto max-w-site px-5 md:px-10 py-3 grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-1 label">
        <Link href="/" className="md:col-span-3 hover:underline underline-offset-4">Patrick Ortell</Link>
        <span className="hidden md:block md:col-span-4">Fort Collins, Colorado · remote, like always</span>
        <a href="mailto:patrick.ortell@arus.io" className="hidden md:block md:col-span-3 hover:underline underline-offset-4">patrick.ortell@arus.io</a>
        <nav className="col-span-1 md:col-span-2 flex justify-end gap-3 md:gap-4">
          <Link href="/blog" className="hover:underline underline-offset-4">Writing</Link>
          <Link href="/resume" className="hover:underline underline-offset-4">Resume</Link>
          <a href="https://impact.arus.io/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Impact</a>
          <a href="https://travel.arus.io/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Travel</a>
        </nav>
      </div>
    </header>
  );
}
