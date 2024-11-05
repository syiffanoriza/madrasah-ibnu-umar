/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins',
      montserrat: 'Montserrat'
    },
    extend: {
      colors: {
        primary: {
          '900': '#368322',
          '800': '#4A9039',
          '700': '#5E9C4E',
          '600': '#73A865',
          '500': '#86B57A',
          '400': '#9AC190',
          '300': '#AFCDA7',
          '200': '#C3DABD',
          '100': '#D7E6D3',
          '050': '#EBF3E9',         
        }
      },
    },
  },
  plugins: [],
}

