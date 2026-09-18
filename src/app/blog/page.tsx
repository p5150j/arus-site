import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on AI, engineering leadership, and building software. From an AI infrastructure architect and engineering leader with 14+ years of experience.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-yellow text-ink min-h-screen">
      <Header />

      <section className="mx-auto max-w-site px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 items-end">
        <h1 className="md:col-span-8 font-black text-[clamp(64px,19vw,96px)] md:text-[clamp(96px,10.5vw,160px)] leading-[0.86] tracking-[-0.045em]">Writing</h1>
        <p className="md:col-span-4 text-xl leading-snug tracking-[-0.01em]">
          Thoughts on AI, engineering leadership, and building software.
        </p>
      </section>

      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-site px-5 md:px-10 pt-5 pb-20 grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <span className="md:col-span-2 label">{posts.length} posts</span>
          <div className="md:col-span-10">
            {posts.length === 0 ? (
              <p className="py-12">No posts yet. Check back soon.</p>
            ) : (
              posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group grid grid-cols-1 md:grid-cols-10 gap-x-6 gap-y-2 py-6 ${i > 0 ? 'border-t border-ink' : 'pt-1'}`}
                >
                  <time className="md:col-span-2 font-mono text-[13px] pt-1">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="md:col-span-6">
                    <span className="block font-bold text-3xl md:text-4xl leading-[1.02] tracking-[-0.03em] group-hover:underline underline-offset-[6px] decoration-2">{post.title}</span>
                    <span className="block text-lg leading-snug mt-3 max-w-[60ch]">{post.description}</span>
                  </span>
                  <span className="md:col-span-2 font-mono text-[12px] pt-1 md:text-right">
                    {(post.tags ?? []).join(' · ')}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
