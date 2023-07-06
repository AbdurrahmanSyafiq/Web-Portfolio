/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'#34d399',
        secondary:'#ef4444',
      },
      fontFamily:{
        'inter': 'Inter, sans-serif',
        'poppins':'Poppins, sans-serif',
        'script':'Dancing Script, cursive'
      }
    },
  },
  
  plugins: [],
}

