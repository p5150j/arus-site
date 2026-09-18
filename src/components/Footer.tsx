import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-yellow text-ink border-t-2 border-ink">
      <div className="mx-auto max-w-site px-5 md:px-10 pt-3 pb-10 flex flex-wrap justify-between gap-x-6 gap-y-2 label">
        <span>&copy; {new Date().getFullYear()} Patrick Ortell</span>
        <div className="flex gap-4">
          <Link href="/blog" className="hover:underline underline-offset-4">blog</Link>
          <a href="/feed.xml" className="hover:underline underline-offset-4">rss</a>
          <a href="https://github.com/p5150j" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">github</a>
          <a href="https://linkedin.com/in/patrickortell" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
