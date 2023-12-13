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
        default: ['san'],
        publicSans: ['Public Sans', 'sans'],
        cursive: ['cursive'],
        fantasy: ['fantasy'],
        'sans-serif': ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {

        // Dark Color
        'd-primary-bg-color' : '#262e35',
        'd-secondary-bg-color': '#303841',

        'd-primary-hoverBg-color': '#a6b0cf22',
        'd-secondary-hoverBg-color': '#abb4d2',

        'd-primary-txt-color': '#eff2f7',
        'd-secondary-txt-color': '#a6b0cf',

        'd-primary-hoverTxt-color': '',
        'd-secondary-hoverTxt-color': '',

        'd-primary-border': '#abb4d233',
      
        // Light Color
        'l-primary-bg-color' : '#ffffff',
        'l-secondary-bg-color': '#f0f2f5',

        'l-primary-hoverBg-color': '#e6ebf5',
        'l-secondary-hoverBg-color': '',

        'l-primary-txt-color': '#343a40',
        'l-secondary-txt-color': '#7a7f9a',

        'l-primary-hoverTxt-color': '',
        'l-secondary-hoverTxt-color': '',

        'l-primary-border': '#abb4d266',

        'util-color-1': '#36404a',
        'util-color-2': '',
        'util-color-3': '',
        'util-color-4': '',

      },
      textColor: {
        'light-1': '#7a7f9a',
        'light-2': '#343a40',
        'light-3': '#878a92',
        'light-4': '#7a7f9a',
        'dark-1': '#262e35',
        'dark-2': '#eff2f7',
        'dark-3': '#a6b0cf',
        'dark-4': '#abb4d2',
      }
    },
  },
  plugins: [],
}


