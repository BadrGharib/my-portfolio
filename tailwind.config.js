const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkRed': '#ff311c',
      },
      fontFamily: {
        nerkoOne: ['NerkoOne','sans-serif'],
        coolvetica:['Coolvetica','sans-serif']
      }
    }
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}