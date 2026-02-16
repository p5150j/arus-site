import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';

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

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <article className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <header className="mb-12">
          <time className="text-sm font-mono text-white/30 block mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-white/50 leading-relaxed">
              {post.description}
            </p>
          )}
        </header>

        <div
          className="prose-dark"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        <footer className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50">
            Have questions?{' '}
            <a
              href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Book a call
            </a>
            {' '}or{' '}
            <a href="mailto:patrick.ortell@arus.io" className="text-white hover:underline">
              email me
            </a>
            .
          </p>
        </footer>
      </article>

      <Footer />
    </main>
  );
}

function formatContent(content: string): string {
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

      const thead = `<thead><tr>${headerCells.map(c => `<th class="px-4 py-3 text-left text-sm font-semibold text-white border-b border-white/20">${c}</th>`).join('')}</tr></thead>`;
      const tbody = bodyRows.map(row => {
        const cells = parseRow(row);
        return `<tr>${cells.map(c => `<td class="px-4 py-3 text-sm text-white/60 border-b border-white/10">${c}</td>`).join('')}</tr>`;
      }).join('');

      return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse">${thead}<tbody>${tbody}</tbody></table></div>`;
    }
  );

  return content
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-10 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black text-white mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto my-6 font-mono text-sm text-white/70"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-white/80">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-white underline hover:no-underline">$1</a>')
    .replace(/^- (.*$)/gim, '<li class="text-white/60">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-6 space-y-2">$&</ul>')
    .replace(/\n\n/g, '</p><p class="text-lg text-white/60 leading-relaxed my-6">')
    .replace(/^(?!<[huplo\d])(.*)/gm, (_match, p1) => {
      if (!p1.trim() || p1.startsWith('<')) return p1;
      return `<p class="text-lg text-white/60 leading-relaxed my-6">${p1}</p>`;
    });
}
