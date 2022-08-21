/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
       'lalu': 'min(50%, 100%)'
      },
      colors:{
        mah:'#6250fe'
      },
      fontFamily :{
        mont:['Montserrat', 'sans-serif']
      },
      fontSize:{
        'extra': 'clamp(3rem, 5vw, 4.5rem)',
        'lotra': 'clamp(1.5rem , 5vw, 2.25rem)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
