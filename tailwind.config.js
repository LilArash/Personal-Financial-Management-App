 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  darkMode:'selector',
  theme: {
    extend: {
     
      container:{
        center: true,
      },
      fontFamily:{
        vazir : "vazir"
      },
      colors: {
        'light-base':'#F3F8FF',
        'coal':'#40394A',
        'dark-coal':'#1C1427',
        'mint':'#7ECA9C',
        'light-mint': '#CCFFBD'
        
      }
    },
  },
  plugins: [],
}