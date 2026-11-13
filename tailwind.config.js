/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#070c18',
          850: '#0b1222',
          800: '#10192e',
          700: '#1c2842',
          600: '#2d3b59',
        },
        mint: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          glow: 'rgba(16, 185, 129, 0.35)',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        amber: {
          DEFAULT: '#f59e0b',
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-mint': '0 0 25px -3px rgba(16, 185, 129, 0.4)',
        'glow-mint-lg': '0 0 45px -5px rgba(16, 185, 129, 0.35)',
        'glow-violet': '0 0 25px -3px rgba(139, 92, 246, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px -2px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.4)',
        'card-hover-violet': '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px -2px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
