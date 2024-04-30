/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      primary: "#2D66F4",
      secondary: "#6941C6",
      textcolor: "#42B844",
      boldTextColor: "#212121",
      Description: "#6B6B6B",
      footerbg: "#D9D9D9",
      backgroundColor1: "#F6F8FA",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
