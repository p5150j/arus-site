import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="bg-yellow text-ink min-h-screen flex flex-col">
      <Header />
      <section className="mx-auto max-w-site w-full px-5 md:px-10 pt-10 md:pt-16 pb-20 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 flex-1">
        <h1 className="md:col-span-8 font-black text-[clamp(64px,19vw,96px)] md:text-[clamp(96px,10.5vw,160px)] leading-[0.86] tracking-[-0.045em] self-end">
          40<span className="inline-block origin-bottom-left rotate-[8deg]">4</span>
        </h1>
        <div className="md:col-span-4 self-end text-xl leading-snug tracking-[-0.01em]">
          <p className="mb-6">Nothing lives at this address. Probably a link that moved when the site did.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-lg font-semibold">
            <Link href="/" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Home</Link>
            <Link href="/blog" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Writing</Link>
            <Link href="/resume" className="border-b-2 border-ink hover:bg-ink hover:text-yellow transition-colors">Resume</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
