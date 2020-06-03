const {colors, zIndex,spacing } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            spacing: {
                ...spacing,
                '68': '18rem'
            },
            zIndex: {
                ...zIndex,
                '1': '1',
                '2': '2'
            },
            boxShadow: {
                'top': '0 -7px 10px rgba(0, 0, 0, 0.18)',
                'right':'10px 5px 10px rgba(0,0,0,0.18)'
            },
            backgroundColor: {
                'black': {
                    'opacity': 'rgba(0,0,0,0.2)',
                    'opacity-dark':'rgba(0,0,0,0.4)'
                }
            },
            colors: {
                red: {
                    ...colors.red,
                    '500': '#ff0000'
                },
                orange: {
                    ...colors.orange,
                    '500': '#ff7400',
                    '800': '#404040',
                    '900': '#9c9790',
                },
                yellow: {
                    ...colors.yellow,
                    '500': '#ffc800'
                }
            }
        },
        screens: {
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
