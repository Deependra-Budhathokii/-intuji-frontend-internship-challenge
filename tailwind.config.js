/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
    
    screens:{
      xl: '1202px'
    },

    fontFamily:{
      manrope:['Manrope', 'sans-serif']
    },

    colors:{
      blue: '#3734A9',
      orange: '#FF7F5C',
      'white-Primary': '#FAFBFF'
     
    },

    backgroundImage:{
      'custom-grad':'linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)'
    }

    },
  },
  plugins: [],
}


