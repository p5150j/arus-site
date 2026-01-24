export default function WhatYouGet() {
  const services = [
    { num: '01', title: 'Code Rescue', desc: 'Audit your vibe-coded mess. Find the landmines before investors do.' },
    { num: '02', title: 'AI/LLM Strategy', desc: 'RAG, fine-tuning, prompt engineering — without the $400K ML hire.' },
    { num: '03', title: 'Architecture Review', desc: 'Will this scale? Is it secure? Get answers, not opinions.' },
    { num: '04', title: 'Hire With Me', desc: 'I sit in your interviews. You\'ll know who can actually code.' },
    { num: '05', title: 'Due Diligence Prep', desc: 'Investors will poke your tech. Let\'s fix it before they do.' },
    { num: '06', title: 'Vendor Audit', desc: 'Is your agency ripping you off? I\'ll tell you in one call.' },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#050505]">
      {/* Background geometric element from previous section */}
      <div className="absolute -left-32 -top-40 w-[600px] h-[600px] pointer-events-none z-0 opacity-50">
        <div className="absolute inset-0 rounded-full border border-white/[0.02]" />
        <div className="absolute inset-12 rounded-full border border-white/[0.02]" />
        <div className="absolute inset-24 rounded-full border border-white/[0.01]" />
      </div>

      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs text-accent tracking-[0.25em] uppercase">
            Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            What you actually get
          </h2>
          <p className="text-lg text-white/40 leading-relaxed mt-6 max-w-2xl">
            No 50-page proposals. No "discovery phases." Just senior technical guidance when you need it.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Monthly Retainer - Large card */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-8 md:p-10 flex flex-col relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-[0.06]">
              <div className="absolute inset-0 rounded-full border-2 border-accent" />
              <div className="absolute inset-8 rounded-full border-2 border-accent" />
              <div className="absolute inset-16 rounded-full border-2 border-accent" />
            </div>
            <div className="absolute top-8 right-8 w-16 h-16 border border-accent/10 rotate-12 rounded-lg" />

            <span className="text-xs text-accent tracking-[0.2em] uppercase relative z-10">
              Most Popular
            </span>
            <h3 className="text-2xl md:text-3xl font-medium text-white mt-4 tracking-tight relative z-10">
              Monthly Retainer
            </h3>

            <div className="mt-6 mb-6 relative z-10">
              <span className="text-5xl md:text-6xl font-medium text-white">$1,500</span>
              <span className="text-white/30 text-xl ml-2">— $2,500</span>
              <span className="text-white/40 text-sm block mt-1">/month</span>
            </div>

            <p className="text-base text-white/50 leading-relaxed mb-8 relative z-10">
              Async Slack access, architecture calls, code reviews, and a senior voice whenever you need a sanity check.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-auto relative z-10">
              {['Slack/async access', 'Weekly sync calls', 'Code & PR reviews', 'Architecture guidance'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Audit card */}
          <div className="lg:col-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 flex flex-col relative overflow-hidden min-h-[220px]">
            {/* Background shape */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-[0.04]">
              <div className="absolute inset-0 border-2 border-white rotate-45" />
              <div className="absolute inset-4 border-2 border-white rotate-45" />
            </div>

            <span className="text-xs text-white/30 tracking-[0.2em] uppercase relative z-10">
              One-Time
            </span>
            <h3 className="text-xl md:text-2xl font-medium text-white mt-3 tracking-tight relative z-10">
              Technical Audit
            </h3>

            <div className="mt-4 relative z-10">
              <span className="text-4xl font-medium text-white">$2,500</span>
              <span className="text-white/30 text-lg ml-2">— $5K</span>
            </div>

            <p className="text-sm text-white/40 leading-relaxed mt-4 relative z-10">
              Deep dive into your codebase, infra, or AI stack. Written report with actionable findings.
            </p>
          </div>

          {/* Service cards */}
          {services.map((service, index) => (
            <div
              key={service.num}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Geometric shapes for each card */}
              {index % 3 === 0 && (
                <div className="absolute -right-4 -bottom-4 w-16 h-16 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                  <div className="absolute inset-0 rounded-full border-2 border-white" />
                  <div className="absolute inset-3 rounded-full border-2 border-white" />
                </div>
              )}
              {index % 3 === 1 && (
                <div className="absolute -right-3 -bottom-3 w-14 h-14 border-2 border-white/[0.04] group-hover:border-white/[0.08] rotate-45 transition-colors" />
              )}
              {index % 3 === 2 && (
                <>
                  <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full border-2 border-white/[0.04] group-hover:border-white/[0.08] transition-colors" />
                  <div className="absolute right-6 bottom-6 w-5 h-5 rounded-full border-2 border-white/[0.04] group-hover:border-white/[0.08] transition-colors" />
                </>
              )}

              <span className="text-accent/40 font-mono text-sm relative z-10">({service.num})</span>
              <h3 className="text-white text-lg font-medium mt-3 mb-2 relative z-10 group-hover:text-accent-light transition-colors">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
