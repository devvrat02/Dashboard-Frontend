/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              primary:'#634832',  //primary  color
              secondary:'#fbebdb',//secondary  color
              ternary:'#a98f7a',
              ternaryl:'#a98f7a50',   //ternary color
              success:'#86b491',
              fail:'#c56666',
              pfont:'#000',   //primary font color
              sfont:'#b79f8b', //secondary font color 
              tfont:'#d0bbaa', //ternary font color
              screenbg:'#f9f4f0',
              cpaid:'#9cc4a5',
              cpend:'#d4a782',
              cover:'#c86d6d',
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: [],
}

