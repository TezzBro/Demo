/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBlack: '#0A0A0A',
        textColor: '#E5E3E3',
        brown:'#2D2D2D',
        darkbrown:"#414141"
      },

    },
  },
  plugins: [],
}

