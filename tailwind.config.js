/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          "0%, 3.7%": { content: '"E"' },
          "3.71%, 7.4%": { content: '"Ed"' },
          "7.41%, 11.1%": { content: '"Eds"' },
          "11.11%, 14.8%": { content: '"Edso"' },
          "14.81%, 18.5%": { content: '"Edson"' },
          "18.51%, 22.2%": { content: '"Edson "' },
          "22.21%, 25.9%": { content: '"Edson V"' },
          "25.91%, 29.6%": { content: '"Edson Vi"' },
          "29.61%, 33.3%": { content: '"Edson Vil"' },
          "33.31%, 37.0%": { content: '"Edson Vill"' },
          "37.01%, 40.7%": { content: '"Edson Villa"' },
          "40.71%, 44.4%": { content: '"Edson Villar"' },
          "44.41%, 48.1%": { content: '"Edson Villarr"' },
          "48.11%, 51.8%": { content: '"Edson Villarro"' },
          "51.81%, 55.5%": { content: '"Edson Villarroe"' },
          "55.51%, 59.2%": { content: '"Edson Villarroe"' },
          "59.21%, 62.9%": { content: '"Edson Villarroel"' },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "50%, 100%": { borderColor: "white" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scroll-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(8px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out forwards",
        typing: "typing 10.36s steps(30, end), blink 1s step-end infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
      },
      fontFamily: {
        kaushan: ['"Kaushan Script"', "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
