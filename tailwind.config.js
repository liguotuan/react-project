/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#root',
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccc: '#ccc',
        ddd: '#ddd',
        eee: '#eee',
      },
      backgroundImage: {
      }
    },
  },
  plugins: [require('tailwindcss-convert-px-to-rem')],
}
