import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/10">
      <div className="flex flex-wrap gap-6 justify-between items-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Patrick Ortell</p>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <a href="/feed.xml" className="hover:text-white transition-colors">RSS</a>
          <a
            href="https://linkedin.com/in/patrickortell"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
