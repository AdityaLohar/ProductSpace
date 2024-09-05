/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        hind: ['Hind Madurai', 'sans-serif'],
        serif: ['sans-serif'],
      },
      animation: {
        "loop-scroll": "loop-scroll 200s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
    },
  },
  plugins: [],
}

