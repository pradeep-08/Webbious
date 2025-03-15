/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {  keyframes: {
      blinkWave: {
        '0%': { opacity: 1, transform: 'scale(1)' },
        '50%': { opacity: 0.9, transform: 'scale(1.1)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
    },
    animation: {
      blinkWave: 'blinkWave 2s infinite',
    },},
  },
  plugins: [],
};
