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
        'light-nav': '#ffffff',
        'dark-nav': '#36404a',
        'main-color': '#7269ef',
        'main-color-hover': '#7269efee',
      },

      borderColor: {
        'primary-dark': '#abb4d222',
        'primary-dark-hover':'#a6b0cf22',
        'secondary-dark': '#303841',
        'secondary-dark-hover': '#abb4d2',
        'primary-light': '#abb4d288',
        'primary-light-hover':'#e6ebf5',
        'secondary-light': '#f0f2f5',
        'secondary-light-hover': '',
      },

      ringColor: {
        'primary-dark': '#262e35',
        'primary-dark-hover':'#a6b0cf22',
        'secondary-dark': '#303841',
        'secondary-dark-hover': '#abb4d2',
        'primary-light': '#ffffff',
        'primary-light-hover':'#e6ebf5',
        'secondary-light': '#f0f2f5',
        'secondary-light-hover': '',
      },

      textColor: {
        'primary-dark': '#eff2f7',
        'secondary-dark': '#a6b0cf',
        'primary-light': '#343a40',
        'secondary-light': '#7a7f9a',
      },

      backgroundColor:{
        'primary-dark': '#262e35',
        'secondary-dark': '#303841',

        'primary-light': '#ffffff',
        'secondary-light': '#f0f2f5',

        'primary-dark-hover':'#a6b0cf22',
        'secondary-dark-hover': '#abb4d2',

        'primary-light-hover':'#e6ebf5',
        'secondary-light-hover': '',
      },
    },
  },
  plugins: [],
}