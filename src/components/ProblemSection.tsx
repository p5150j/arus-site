export default function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Vibe Coded Mess',
      desc: '25% of YC startups are 95% AI-generated code. Yours too? Nobody on your team actually understands what\'s in there.',
    },
    {
      num: '02',
      title: 'Black Box Code',
      desc: '45% of AI-generated code has security vulnerabilities. It works... but will it hold up to due diligence?',
    },
    {
      num: '03',
      title: 'Can\'t Vet Talent',
      desc: 'You need to hire devs but can\'t evaluate skills. Is this senior actually senior, or just good at prompting?',
    },
    {
      num: '04',
      title: 'Getting Fleeced',
      desc: 'Is your agency padding estimates? Building for $50K what you could buy for $500/mo? You\'d never know.',
    },
  ];

  return (
    <section className="relative py-32 bg-[#070707] overflow-visible">
      {/* Large decorative element spanning to next section - RIGHT SIDE */}
      <div className="absolute -right-64 bottom-[-400px] w-[900px] h-[900px] pointer-events-none z-0">
        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border border-accent/[0.08]" />
        <div className="absolute inset-12 rounded-full border border-accent/[0.07]" />
        <div className="absolute inset-24 rounded-full border border-accent/[0.06]" />
        <div className="absolute inset-36 rounded-full border border-accent/[0.05]" />
        <div className="absolute inset-48 rounded-full border border-accent/[0.04]" />
        <div className="absolute inset-60 rounded-full border border-white/[0.04]" />
        <div className="absolute inset-72 rounded-full border border-white/[0.03]" />
        <div className="absolute inset-84 rounded-full border border-white/[0.02]" />
        {/* Inner glow */}
        <div className="absolute inset-[350px] rounded-full bg-gradient-to-br from-accent/[0.04] to-transparent" />
      </div>

      {/* Secondary geometric accent */}
      <div className="absolute right-40 bottom-[-150px] w-48 h-48 pointer-events-none z-0 opacity-[0.05]">
        <div className="absolute inset-0 border-2 border-white rotate-45" />
        <div className="absolute inset-6 border-2 border-white rotate-45" />
        <div className="absolute inset-12 border-2 border-white rotate-45" />
      </div>

      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs text-accent tracking-[0.25em] uppercase">
            The Problem
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4">
            You need senior guidance,
            <br />
            <span className="text-white/25">not a $300K salary</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large feature card */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10 flex flex-col relative overflow-hidden">
            {/* Background geometric shapes */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.03]">
              <div className="absolute inset-0 rounded-full border-[3px] border-white" />
              <div className="absolute inset-8 rounded-full border-[3px] border-white" />
              <div className="absolute inset-16 rounded-full border-[3px] border-white" />
              <div className="absolute inset-24 rounded-full border-[3px] border-white" />
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 border border-accent/10 rotate-45" />

            <p className="text-lg text-white/50 leading-relaxed mb-6 relative z-10">
              Your team shipped fast with Cursor and Copilot. Great. But now there&apos;s 50K lines of code
              nobody fully understands, and &quot;rescue engineering&quot; is the hottest job in tech for a reason.
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-auto relative z-10">
              Even Cursor&apos;s CEO warns that vibe-coded apps &quot;look fine at first but crumble as they grow.&quot;
              You need senior eyes before investors or customers find the cracks.
            </p>

            {/* Geometric accent shape */}
            <div className="mt-8 flex justify-end relative z-10">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 rounded-full border border-accent/20" />
                <div className="absolute inset-4 rounded-full border border-accent/30" />
                <div className="absolute inset-8 rounded-full bg-accent/10" />
                <div className="absolute inset-10 rounded-full bg-accent/20" />
              </div>
            </div>
          </div>

          {/* Salary stat card */}
          <div className="lg:col-span-2 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute -right-10 -top-10 w-40 h-40 opacity-[0.08]">
              <div className="absolute inset-0 border-2 border-accent rounded-full" />
              <div className="absolute inset-6 border-2 border-accent rounded-full" />
              <div className="absolute inset-12 border-2 border-accent rounded-full" />
            </div>
            <div className="absolute right-20 bottom-4 w-16 h-16 border border-accent/10 rounded-lg rotate-12" />

            <span className="text-xs text-accent/60 tracking-[0.2em] uppercase relative z-10">
              Average CTO Salary
            </span>
            <div className="relative z-10">
              <span className="text-5xl md:text-6xl font-medium text-white">$285K</span>
              <span className="block text-white/30 text-sm mt-2">+ equity, benefits, overhead</span>
            </div>
          </div>

          {/* Problem cards */}
          {problems.map((problem, index) => (
            <div
              key={problem.num}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Different geometric shapes for each card */}
              {index === 0 && (
                <div className="absolute -right-6 -bottom-6 w-24 h-24 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                  <div className="absolute inset-0 rounded-full border-2 border-white" />
                  <div className="absolute inset-4 rounded-full border-2 border-white" />
                </div>
              )}
              {index === 1 && (
                <div className="absolute -right-4 -bottom-4 w-20 h-20 border-2 border-white/[0.04] group-hover:border-white/[0.08] rotate-45 transition-colors" />
              )}
              {index === 2 && (
                <div className="absolute -right-8 -bottom-8 w-28 h-28 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                  <div className="absolute inset-0 border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                  <div className="absolute inset-4 border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                </div>
              )}
              {index === 3 && (
                <>
                  <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full border-2 border-white/[0.04] group-hover:border-white/[0.08] transition-colors" />
                  <div className="absolute right-6 bottom-6 w-8 h-8 rounded-full border-2 border-white/[0.04] group-hover:border-white/[0.08] transition-colors" />
                </>
              )}

              <span className="text-accent/40 font-mono text-sm relative z-10">({problem.num})</span>
              <h3 className="text-white text-lg font-medium mt-3 mb-2 relative z-10">{problem.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed relative z-10">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
