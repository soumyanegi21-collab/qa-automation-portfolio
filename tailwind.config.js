/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#152521',
        moss: '#2d6a4f',
        mint: '#d7f2e3',
        paper: '#f5f7f2',
      },
    },
  },
  plugins: [],
};
