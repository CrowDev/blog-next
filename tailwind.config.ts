import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ghost-white': '#F1F2F9',
        'rich-black': '#000814',
        'berkeley-blue': '#003366',
        'sapphire': '#0054A3',
        'indigo': '#430B8E'
      },
      display: ['group-hover'],
    }
  },
  plugins: [],
}
export default config
