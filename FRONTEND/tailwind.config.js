/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }, 
      colors: {
        bgWhite: '#F0F0F5',
        textBlack: '#13131A',
        textGray: '#737380',
        borderInput: '#DCDCE5',
        red: '#E02041'
      },
      boxShadow: {
        '3xl': '0 0 100px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}