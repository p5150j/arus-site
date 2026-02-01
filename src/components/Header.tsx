import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 p-6 md:p-8 z-50">
      <nav className="flex gap-6 text-sm font-mono text-white/50">
        <Link href="/" className="hover:text-white transition-colors">
          home
        </Link>
        <Link href="/blog" className="hover:text-white transition-colors">
          blog
        </Link>
        <Link href="/resume" className="hover:text-white transition-colors">
          resume
        </Link>
      </nav>
    </header>
  );
}
