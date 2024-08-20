/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0CC0DF',  // Blue
        secondary: '#FFA800',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'headline-1': '64px',
        'subheadline-1': '48px',
        'headline-2': '48px',
        'subheadline-2': '32px',
        'headline-3': '32px',
        'subheadline-3': '24px',
        'subheadline-4': '20px',
      },
      screens: {
        'sm': { 'max': '768px' },
      },
    },
  },
  plugins: [],
}


