import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPostSlugs, getAllPosts, formatDate } from '@/lib/posts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Patrick Ortell'],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const all = getAllPosts(); // newest first
  const idx = all.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const words = post.content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));

  return (
    <main className="bg-yellow text-ink min-h-screen">
      <Header />

      <article className="mx-auto max-w-site px-5 md:px-10 pt-10 md:pt-16 pb-20 grid grid-cols-1 md:grid-cols-12 gap-x-6">
        <header className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 pb-8 mb-10 border-b-2 border-ink">
          <div className="md:col-span-2 font-mono text-[13px] flex md:flex-col gap-x-4 gap-y-1">
            <time>
              {formatDate(post.date)}
            </time>
            <span>{minutes} min read</span>
            {post.tags && post.tags.length > 0 && <span>{post.tags.join(' · ')}</span>}
          </div>
          <div className="md:col-span-9">
            <h1 className="font-black text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em] mb-5">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-xl md:text-2xl leading-snug tracking-[-0.01em] max-w-[52ch]">{post.description}</p>
            )}
          </div>
        </header>

        <div className="hidden md:block md:col-span-2 label pt-1">
          <Link href="/blog" className="hover:underline underline-offset-4">← Writing</Link>
        </div>

        <div
          className="md:col-span-7 max-w-[68ch] text-[18px] leading-[1.55]"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        <footer className="md:col-span-12 mt-16 border-t-2 border-ink">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 pt-4 pb-10">
            <span className="md:col-span-2 label">Have questions?</span>
            <p className="md:col-span-7 text-lg">
              <a
                href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors"
              >
                Book a call
              </a>
              {' '}or{' '}
              <a href="mailto:patrick.ortell@arus.io" className="font-semibold border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">
                email me
              </a>
              .
            </p>
          </div>

          <nav className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 border-t border-ink pt-4" aria-label="More writing">
            <span className="md:col-span-2 label">More writing</span>
            <div className="md:col-span-10 grid md:grid-cols-2 gap-x-6 gap-y-6">
              {older ? (
                <Link href={`/blog/${older.slug}`} className="group">
                  <span className="label block mb-2">← Older</span>
                  <span className="block text-2xl font-bold leading-tight tracking-[-0.02em] group-hover:underline underline-offset-4">{older.title}</span>
                </Link>
              ) : <span />}
              {newer ? (
                <Link href={`/blog/${newer.slug}`} className="group md:text-right">
                  <span className="label block mb-2">Newer →</span>
                  <span className="block text-2xl font-bold leading-tight tracking-[-0.02em] group-hover:underline underline-offset-4">{newer.title}</span>
                </Link>
              ) : <span />}
            </div>
          </nav>
        </footer>
      </article>

      <Footer />
    </main>
  );
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatContent(content: string): string {
  // Lift fenced code out first so later passes never touch its lines.
  const codeBlocks: string[] = [];
  content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, _lang, code) => {
    codeBlocks.push(
      `<pre class="bg-ink text-yellow p-4 overflow-x-auto my-8 font-mono text-sm leading-relaxed"><code>${escapeHtml(code.replace(/\n$/, ''))}</code></pre>`
    );
    return `<!--CODE${codeBlocks.length - 1}-->`;
  });

  // Process tables before other transformations
  content = content.replace(
    /((?:^\|.+\|$\n?)+)/gm,
    (tableBlock) => {
      const rows = tableBlock.trim().split('\n').filter(r => r.trim());
      if (rows.length < 2) return tableBlock;

      const parseRow = (row: string) =>
        row.split('|').slice(1, -1).map(cell => cell.trim());

      const headerCells = parseRow(rows[0]);
      // Skip separator row (row[1] with dashes)
      const bodyRows = rows.slice(2);

      const thead = `<thead><tr>${headerCells.map(c => `<th class="px-3 py-2 text-left text-sm font-semibold border-b-2 border-ink">${c}</th>`).join('')}</tr></thead>`;
      const tbody = bodyRows.map(row => {
        const cells = parseRow(row);
        return `<tr>${cells.map(c => `<td class="px-3 py-2 text-sm border-b border-ink/30 align-top">${c}</td>`).join('')}</tr>`;
      }).join('');

      return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse">${thead}<tbody>${tbody}</tbody></table></div>`;
    }
  );

  return content
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold tracking-[-0.01em] mt-10 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-black tracking-[-0.03em] leading-tight mt-14 mb-5 pt-4 border-t border-ink">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-black tracking-[-0.03em] mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-ink/10 px-1 py-0.5 text-[15px] font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="font-medium underline underline-offset-[3px] decoration-1 hover:decoration-2">$1</a>')
    .replace(/^---$/gm, '<hr class="border-0 border-t border-ink my-10" />')
    .replace(/^\d+\. (.*$)/gim, '<oli>$1</oli>')
    .replace(/(<oli>.*<\/oli>\n?)+/g, '<ol class="list-decimal pl-6 my-6 space-y-1.5 marker:font-mono marker:text-[15px]">$&</ol>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-6 space-y-1.5 marker:text-ink">$&</ul>')
    .replace(/<(\/?)oli>/g, '<$1li>')
    .replace(/\n\n/g, '</p><p class="my-5">')
    .replace(/^(?!<[huplo\d])(.*)/gm, (_match, p1) => {
      if (!p1.trim() || p1.startsWith('<')) return p1;
      return `<p class="my-5">${p1}</p>`;
    })
    .replace(/<!--CODE(\d+)-->/g, (_m, i) => codeBlocks[Number(i)]);
}
