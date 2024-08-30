/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s infinite',
      }, 
      colors: {
        brown: {
          700: '#FF7F50', // Warna cokelat
        },
      },
    },
  },
  plugins: [require('daisyui'), ],
}
