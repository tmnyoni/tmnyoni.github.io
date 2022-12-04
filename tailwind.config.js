/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(20px)' },
          '100%': {
             transform: 'none' ,
             opacity: '1'
            },
        }
      },
      animation: {
        reveal: 'reveal 2s forwards',
      }
    }
  },
  plugins: [],
}
