/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/rippleui/**/*.js',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1600px',
    },
    extend: {},
  },
  plugins: [
    require("rippleui"),
    require('preline/plugin')
  ],

}

