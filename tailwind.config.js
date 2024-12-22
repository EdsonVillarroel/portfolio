/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
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
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out forwards",
        typing: "typing 10.36s steps(30, end), blink 1s step-end infinite",
      },
      fontFamily: {
        kaushan: ['"Kaushan Script"', "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
