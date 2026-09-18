import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none bg-gradient-to-b from-ink via-ink/85 to-transparent">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-6 md:py-7 flex items-center justify-between">
        <Link
          href="/"
          className="pointer-events-auto font-serif text-2xl leading-none text-paper hover:text-accent transition-colors"
        >
          P. Ortell
        </Link>
        <nav className="pointer-events-auto flex gap-5 md:gap-6 text-sm font-mono text-muted">
          <Link href="/" className="hover:text-paper transition-colors">home</Link>
          <Link href="/blog" className="hover:text-paper transition-colors">blog</Link>
          <Link href="/resume" className="hover:text-paper transition-colors">resume</Link>
          <a href="https://impact.arus.io/" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">impact</a>
          <a href="https://travel.arus.io/" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">travel</a>
        </nav>
      </div>
    </header>
  );
}
