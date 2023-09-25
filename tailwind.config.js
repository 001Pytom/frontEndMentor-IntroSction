/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: '"Epilogue", sans-serif',
      },

      colors: {
        grey1: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
        AlmostWhite: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
