/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'border-rotate': 'borderRotate 2s linear infinite',
        'circle-progress': 'circleProgress 2s ease-in-out infinite',
        'shine': 'shine 1.5s infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        borderRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        circleProgress: {
          '0%': { strokeDasharray: '0 251.2' },
          '50%': { strokeDasharray: '251.2 0' },
          '100%': { strokeDasharray: '0 251.2' },
        },
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
} 