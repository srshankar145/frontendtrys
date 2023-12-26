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
      },
      boxShadow: {
        'cu':  'rgba(0, 0, 0, 0.1) 0px 4px 12px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

