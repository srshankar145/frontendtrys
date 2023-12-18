/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var", sans-serif'],
        Alkatra: ["Alkatra" ],
        Signika: ["Signika Negative"]
      }
    },
  },
  plugins: [],
}

