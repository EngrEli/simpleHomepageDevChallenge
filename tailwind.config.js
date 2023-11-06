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
        "72px": "72px",
      },
      colors: {
        dark: "#111729",
        light: "#223344",
        "body-background": "#F2F9FE",
      },
    },
  },
  plugins: [],
};
