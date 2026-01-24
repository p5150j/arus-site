import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on AI, engineering leadership, and building software. From a fractional CTO with 14+ years of experience.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Blog
        </h1>

        <p className="text-xl text-white/50 mb-16">
          Thoughts on AI, engineering leadership, and building software.
        </p>

        {posts.length === 0 ? (
          <div className="text-white/40 py-12">
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-white/10 pb-12 last:border-0">
                <time className="text-sm font-mono text-white/30 block mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/70 transition-colors mb-3">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-lg text-white/50 leading-relaxed">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
