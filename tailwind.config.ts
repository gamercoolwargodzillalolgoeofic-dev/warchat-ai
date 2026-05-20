import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        secondary: '#FF0080',
        dark: '#0A0E27',
        darker: '#050812',
        card: 'rgba(255, 255, 255, 0.05)',
      },
      backdropFilter: {
        none: 'none',
        sm: 'blur(4px)',
        DEFAULT: 'blur(10px)',
        md: 'blur(12px)',
        lg: 'blur(40px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        typing: 'typing 0.7s steps(1, end)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
