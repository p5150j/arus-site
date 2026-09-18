/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
        'serif': ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
