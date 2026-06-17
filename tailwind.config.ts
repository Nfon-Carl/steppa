import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: { DEFAULT: '#C9F31D', dark: '#A8CC10' },
        dark: { base: '#0C0C0C', surface: '#141414', elevated: '#1C1C1C', card: '#222222' },
        offwhite: '#F5F3EE',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};

export default config;
