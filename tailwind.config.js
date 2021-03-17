const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-indigo': '#6924FF',
        'primary-blue': '#1E2D56',
        'secondary-blue': '#7483AA',
        'light-blue': '#00A5FF',
        'gray-darker': '#181818'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
