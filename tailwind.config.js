/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        "50px": "50px",
      },
      lineHeight: {
        "main-text": "100px",
      },
      colors: {
        dark: "#111729",
        "light-text": "#223344",
        grey: "#909193",
        "body-background": "#F2F9FE",
        "button-color": "#2A4DD0",
      },
    },
  },
  plugins: [],
};
