const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './utils/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './layouts/**/*.{js,ts,jsx,tsx}', 
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary-indigo': '#6924FF',
        'primary-blue': '#1E2D56',
        'secondary-blue': '#7483AA',
        'light-blue': '#00A5FF',
        'gray-darker': '#181818'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
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
