/** @type {import('tailwindcss').Config} */
module.exports = {
  //look for css classes in all html and js files.
  content: ["./build/*.html", "./build/script/*.js"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      //to bounce down and back
      keyframes: {
        'open-menu':{
        '0%': {transform: 'scaleY(0)'},
        '80%': {transform: 'scaleY(1.2)'},
        '100%': {transform: 'scaleY(1)'}
      } },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',

        
      }
    },
  },
  plugins: [],
};
