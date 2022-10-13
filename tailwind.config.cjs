/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"] ["./billetter.html"],
  theme: {
    colors: {
      red:'#830101',
      redhover:'#AA2828',
      white:'#FFFFFF',
      green:'#9FC088',
      greenhover:'#CFF0B8',
      black:'#000000'
    },
    extend: {
      fontFamily:{
        arima:"'Arima Madurai', cursive",
        arial:"'Arial', sans-serif",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
