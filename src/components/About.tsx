export default function About() {
  const wins = [
    { value: '70%', label: 'support cost reduction via LLM' },
    { value: '30%', label: 'ML performance improvement' },
    { value: '85%', label: 'fewer production incidents' },
    { value: '100%', label: 'on-time across 8 quarters' },
  ];

  const tech = [
    'LLMs', 'Langchain', 'MLOps', 'Python', 'TypeScript', 'Rust',
    'AWS', 'Kubernetes', 'Terraform', 'React', 'Node.js', 'PostgreSQL'
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] text-[#B8956C] tracking-[0.2em] uppercase font-medium">
            About
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.15] mt-6 tracking-[-0.02em]">
            Patrick Ortell
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Bio - spans 2 cols */}
          <div className="lg:col-span-2 bento-card p-8 md:p-10">
            <div className="max-w-xl space-y-5">
              <p className="text-[17px] text-white/55 leading-relaxed">
                14 years building software. Three exits. Scaled engineering teams from zero to 80+.
                Now I help smaller teams get senior technical guidance without the overhead.
              </p>
              <p className="text-[17px] text-white/55 leading-relaxed">
                I&apos;ve shipped AI/ML systems, built cloud infrastructure at scale, and led technical
                due diligence for acquisitions. I know what good looks like — and what questions to ask.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/[0.06]">
              <a
                href="https://linkedin.com/in/patrickortell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#B8956C] hover:text-[#D4B08C] transition-colors"
              >
                LinkedIn &rarr;
              </a>
              <a
                href="mailto:patrick.ortell@arus.io"
                className="text-[14px] text-[#B8956C] hover:text-[#D4B08C] transition-colors"
              >
                patrick.ortell@arus.io &rarr;
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="bento-card p-0 overflow-hidden min-h-[280px]">
            <img
              src="/patrick.png"
              alt="Patrick Ortell"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Tech stack */}
          <div className="bento-card p-8 md:p-10">
            <span className="text-[11px] text-white/30 tracking-[0.15em] uppercase block mb-6">
              Core Expertise
            </span>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-[13px] text-white/50 bg-white/[0.02] border border-white/[0.05] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Wins grid - spans 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {wins.map((win, index) => (
              <div key={index} className="bento-card p-6 md:p-8">
                <span className="text-[36px] md:text-[42px] font-medium text-gradient tracking-tight">
                  {win.value}
                </span>
                <p className="text-[13px] text-white/35 mt-2 leading-relaxed">{win.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
