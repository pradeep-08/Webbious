/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      keyframes: {
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

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0' },
          '60%': { backgroundPosition: '180px' },
          '100%': { backgroundPosition: '180px' },
        },
      },
      animation: {
        shine: 'shine 3s linear infinite forwards',
      },
    },
  },
  plugins: [],
}

