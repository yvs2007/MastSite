/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
   

    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors:{
        mastblue: '#5271FF',
        yellowText: '#FADF70',
        whiteText: '#FFFEFE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

