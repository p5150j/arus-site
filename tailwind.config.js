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
      },
      colors: {
        yellow: '#FDE102',
        ink: '#111111',
      },
      maxWidth: {
        site: '1600px',
      },
    },
  },
  plugins: [],
}
