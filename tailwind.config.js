import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        secondary: colors.orange,
      }
    },
  },
  plugins: [],
}
