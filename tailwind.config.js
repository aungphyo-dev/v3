/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
      },
    },
    extend: {
      animation:{
        'spin-slow': 'spin 4s linear infinite',
        "bounce-one" : "bounce 1s linear"
      },
      fontFamily:{
        "akaya" :"Akaya",
        "aceme" : "Acme"
      },
    },
  },
  plugins: [],
}

