/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {"blue":"#1D7694",
        "ButtonGreen":"#8BCD3D",
    },
  },
  plugins: [],
}
}