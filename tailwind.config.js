/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      
    },
    extend: {
      backgroundImage:{
        'brackets':"url('./public/brackets.png')",
      },
      colors: {
        Mblue: "#4660E3",
        yellowText: "#ffc000",
        whiteText: "#F8FFF4",
        Mblack: "#0C0910",
        Mgray: "#273043",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
