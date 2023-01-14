/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' //todos os meus arquivos dentro de src vai ter tailwind
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00b37e',
          500: '#00875f',
          700: '#015f43',
        },
        blue :{
          500: '#81D8F7',
        },
        orange: {
          500: '#fba94c',
        },
        red :{
          500: '#F75A68',
        },
        gray:{
          100: '#EIEIE6',
          200: '#C4C4cc',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090a'
        }
      }
    },
  },
  plugins: [],
}
