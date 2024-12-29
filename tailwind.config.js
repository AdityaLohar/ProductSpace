/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        hind: ["Hind Madurai", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        serif: ["sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 280s linear infinite",
        "infinite-scroll": "infinite-scroll 35s linear infinite",
        disco: "disco 1.5s linear infinite",
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
      },
      screens: {
        "custom-0": "320px", // Custom breakpoint
        "custom-1": "375px",
        "custom-2": "425px",
        "custom-3": "630px",
        "custom-4": "768px",
        "custom-5": "1024px",
        "custom-6": "1098px",
        "custom-7": "1166px",
        "custom-8": "1212px",
        "custom-9": "1300px",
        "custom-10": "1445px",
        "custom-11": "1520px",
        "custom-12": "1620px",
        "custom-13": "1400px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
