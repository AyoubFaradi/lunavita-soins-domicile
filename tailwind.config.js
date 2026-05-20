/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        'petrol': '#0A4D68',
        'petrol-dark': '#053347',
        'wellness': '#4ADE80',
        'wellness-dark': '#22C55E',
        'wellness-light': '#86EFAC',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #0A4D68 0%, #4ADE80 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(10,77,104,0.95) 0%, rgba(74,222,128,0.1) 100%)',
      },
      screens: {
        'xs': '375px',
        'sm': '480px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
      },
    },
  },
  plugins: [],
}
