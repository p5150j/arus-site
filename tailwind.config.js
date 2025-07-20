/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#f7f3f0',
        'light-grey': '#fafafa',
        'warm-grey': '#e8e5e2',
        'charcoal': '#1a1a1a',
        'accent': '#ff6b35',
        'text-primary': '#2d2d2d',
        'text-secondary': '#6b6b6b',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
        'mono': ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'loader-expand': 'loader-expand 2s ease-in-out infinite',
        'hero-fade-in': 'hero-fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
      keyframes: {
        'loader-expand': {
          '0%, 100%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(1)' }
        },
        'hero-fade-in': {
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scroll-down': {
          'to': {
            top: '40px'
          }
        }
      }
    },
  },
  plugins: [],
}