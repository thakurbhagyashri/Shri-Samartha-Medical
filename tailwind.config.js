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
    
      custom: [ "Roboto Slab", "serif"],
      roboto:["EB Garamond", "serif"],
      merriWeather:["Merriweather", "serif"],
      playfair:[ "Playfair Display", "serif"],
      fira:["Fira Sans", "serif"]
    },
    fontWeight:{
      regular:400
    }
    
  },
  plugins: [],
}
}

