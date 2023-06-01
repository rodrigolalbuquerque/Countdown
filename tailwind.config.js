/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      fontFamily: {
        'love': ["'Courgette', cursive"],
      },
    },

    screens: {
      'lg': {'max': '1536px'},
      'md': {'max': '1100px'},
      'sm': {'max': '930px'},
      'xs': {'max': '760px'},
      '2xs': {'max': '680px'},
      '3xs': {'max': '550px'},
    }
  },
  plugins: [],
}

