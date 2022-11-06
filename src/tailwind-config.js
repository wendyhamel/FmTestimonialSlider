tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'gray': '#8585AC',
                'gray-blue': 'hsl(240, 18%, 77%)',
                'dark-blue': 'hsl(240, 38%, 20%)',
            },
            boxShadow: {
                'glow': '0 50px 50px -30px rgba(47, 46, 93, 0.4), 0 30px 50px -50px rgba(47, 46, 93, 0.5)'
            },
            fontSize: {
                smaller: '0.95rem'
            },
            animation: {
                'fade': 'fade 600ms ease-in',
                'translate-left': 'translate-left 600ms ease-in',
                'translate-bottom': 'translate-bottom 600ms ease-in',
            },
            keyframes: {
                'fade': {
                    '0%': { opacity: '0%', transform: 'scale(1.05) translateX(-12px);'},
                    '50%': { opacity: '100%'},
                    '100%': { transform: 'scale(1) translateX(0);'}
                },
                'translate-left': {
                    '0%': { opacity: '0%', transform: 'translateX(12px)'},
                    '50%': { opacity: '100%'},
                    '100%': { transform: 'translateX(0)'}
                },
                'translate-bottom': {
                    '0%': { opacity: '0%', transform: 'translateY(12px)'},
                    '50%': { opacity: '100%'},
                    '100%': { transform: 'translateY(0)'}
                }
            }
        }
    }
}