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
        mainInter: ["Inter", "sans-serif"]
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        loosely: '1.0rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

