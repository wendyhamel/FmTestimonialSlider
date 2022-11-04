tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'gray-blue': 'hsl(240, 18%, 77%)',
                'dark-blue': 'hsl(240, 38%, 20%)',
            },
            boxShadow: {
                'glow': '0 50px 50px -30px rgba(47, 46, 93, 0.4), 0 30px 50px -50px rgba(47, 46, 93, 0.5)'
            },
            fontSize: {
                smaller: '0.95rem'
            }
        }
    }
}