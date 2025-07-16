import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primarysButton: '#8A0000',
        secondysButton: '#3B060A',
        cardColour: '#C83F12',
        discountColor: '#FFF287',
        deepMaroon: '#a6102d',
        midnight: '#FFA500'
      }
    },
  },
  plugins: [],
}
