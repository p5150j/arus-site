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
        paper: '#F4F1E8',
      },
      maxWidth: {
        site: '1600px',
      },
    },
  },
  plugins: [],
}
