const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        red:{
          ...colors.red,
          '500':'#ff0000'
        },
        orange: {
          ...colors.orange,
          '500':'#ff7400',
          '800': '#404040',
          '900':'#9c9790',
        },
        yellow:{
          ...colors.yellow,
          '500':'#ffc800'
        }

      }
    },
    screens:{
      'sm': {'max': '480px'},
      'md': {'max': '1024px'},
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
