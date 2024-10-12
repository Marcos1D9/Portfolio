/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily: {
        Jersey10PixelFont: ['welcome', 'sans-serif'],
      },
    },
    screens: {
      'xxxs': '280px',
      'xxs': '335px',
      'xs': '540px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke")
  ],
}

