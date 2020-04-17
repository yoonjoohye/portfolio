module.exports = {
  theme: {
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
