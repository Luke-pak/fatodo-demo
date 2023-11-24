import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primary: '#3B71CA',
        secondary: '#9FA6B2',
        success: '#14A44D',
        danger: '#DC4C64',
        warning: '#E4A11B',
        info: '#54B4D3',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
