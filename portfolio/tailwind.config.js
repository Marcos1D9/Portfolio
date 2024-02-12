/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  "darkMode": "class",
  theme: {
    screens: {
      'xxxs': '280px',
      'xxs': '335px',
      'xs': '540px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

