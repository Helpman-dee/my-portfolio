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
        navy: {
          50: '#f0f4f9',
          100: '#dde6f2',
          200: '#c0d2e8',
          300: '#94b4d9',
          400: '#628fc4',
          500: '#3e6fad',
          600: '#3157A4', // Royal blue
          700: '#264483',
          800: '#1b2f5c',
          900: '#101B2D', // Deep navy
          950: '#0a101d',
        },
        offwhite: '#F7F8FA',
        gold: {
          50: '#fdfbf0',
          100: '#faf5d8',
          200: '#f4e9ad',
          300: '#ecda79',
          400: '#e1c648',
          500: '#C5A059', // Warm gold
          600: '#D4AF37', // Accent gold
          700: '#9c6f21',
          800: '#7e5720',
          900: '#67471f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 27, 45, 0.05), 0 1px 2px -1px rgba(16, 27, 45, 0.05)',
        'premium': '0 10px 30px -10px rgba(16, 27, 45, 0.1), 0 4px 6px -4px rgba(16, 27, 45, 0.05)',
        'premium-hover': '0 20px 40px -15px rgba(49, 87, 164, 0.18)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

