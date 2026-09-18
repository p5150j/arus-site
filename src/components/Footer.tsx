import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-wrap gap-6 justify-between items-center text-sm text-faint">
        <p>&copy; {new Date().getFullYear()} Patrick Ortell · Fort Collins, Colorado</p>
        <div className="flex gap-6 font-mono">
          <Link href="/blog" className="hover:text-paper transition-colors">blog</Link>
          <a href="/feed.xml" className="hover:text-paper transition-colors">rss</a>
          <a
            href="https://github.com/p5150j"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/patrickortell"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
