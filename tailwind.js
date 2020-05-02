const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '800': '#404040',
          '900':'#9c9790',
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
