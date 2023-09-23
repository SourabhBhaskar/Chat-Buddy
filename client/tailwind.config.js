/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          'xs': '411px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px'  
        }
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans'],
      }
    },
  },
  plugins: [],
}


