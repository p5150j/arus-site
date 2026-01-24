export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 border-t border-white/10">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Let's talk</h2>

      <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
        Book a 30-minute intro call. No pitch, no pressure — just a conversation to see if I can help.
      </p>

      <a
        href="https://calendar.app.google/hbi5hCjnYi6uFcBW7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-white text-[#0a0a0a] text-lg font-semibold rounded hover:bg-white/90 transition-colors mb-12"
      >
        Book a call
      </a>

      <div className="space-y-3 text-lg text-white/50">
        <p>
          <a href="mailto:patrick.ortell@arus.io" className="hover:text-white transition-colors">
            patrick.ortell@arus.io
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/patrickortell"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            linkedin.com/in/patrickortell
          </a>
        </p>
      </div>
    </section>
  );
}
