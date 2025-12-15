/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mi-beige': '#F5F5DC',
        'mi-azul-neon': '#26DAEB',
        'mi-gris-texto': '#4A4543', 
        'mi-lila': '#A77FFF',
      },
    },
  },
  plugins: [],
}
