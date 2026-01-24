import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.png)' }}
      />

      {/* Particles - hero only */}
      <Particles />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs text-white/40 tracking-[0.25em] uppercase">
              Fractional CTO
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
            Senior AI & engineering
            <br />
            <span className="text-gradient italic">without the hire</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">
            LLMs, MLOps, architecture, infrastructure. I help founders and small teams make better technical decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Call
              <span className="ml-2">→</span>
            </a>
            <a
              href="#services"
              className="btn-secondary"
            >
              View Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 pt-8 border-t border-white/10">
            <div>
              <span className="text-4xl font-medium text-white">14+</span>
              <span className="text-sm text-white/30 ml-2">years</span>
            </div>
            <div>
              <span className="text-4xl font-medium text-white">3</span>
              <span className="text-sm text-white/30 ml-2">exits</span>
            </div>
            <div>
              <span className="text-4xl font-medium text-white">80+</span>
              <span className="text-sm text-white/30 ml-2">engineers led</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center border-t border-white/5">
        <span className="text-xs text-white/25">Techstars Mentor '23</span>
        <div className="flex items-center gap-2 text-xs text-white/25">
          <span>Scroll</span>
          <div className="w-4 h-6 rounded-full border border-white/20 flex justify-center pt-1">
            <div className="w-0.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
