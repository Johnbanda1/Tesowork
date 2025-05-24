/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4A148C',
        },
        red: {
          600: '#D32F2F',
          700: '#C62828',
        },
      },
    },
  },
  plugins: [],
};