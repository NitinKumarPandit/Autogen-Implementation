/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};