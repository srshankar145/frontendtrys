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
        poppins: ["Poppins", "sans-serif"],
        Ubuntu: ["Ubuntu", "Times New Roman"],
        Pompiere: ["Pompiere"],
        Galada: ["Galada"],
      },
    },
  },
  plugins: [],
};
