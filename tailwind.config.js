/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ButtonGreen":"#8BCD3D",
        "bgBlue":"#2e9eb8"
    },
    fontFamily: {
      // custom: ['Roboto', 'EB_Garamonod'],
      // inter: ['Inter', 'sans-serif'],
      custom: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      thin: 100,    // Extra light weight
      light: 300,   // Light weight
      normal: 400,  // Normal weight
      medium: 500,  // Medium weight
      semibold: 600, // Semi-bold weight
      bold: 700,    // Bold weight
      extrabold: 800, // Extra-bold weight
      black: 900,   // Black weight
    },
  },
  plugins: [],
}
}

