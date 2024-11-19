/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ButtonGreen":"#8BCD3D",
    },
    fontFamily: {
      custom: ['Roboto', 'EB_Garamonod'], // For Google Fonts
     
    },
  },
  plugins: [],
}
}