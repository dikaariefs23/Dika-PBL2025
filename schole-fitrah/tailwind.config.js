/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // Tambahkan ini
  theme: {
    extend: {
      colors: {
        sfBrown: "#7A5230",
        sfGold: "#C5966C",
        sfLight: "#FFFDFA",
        sfDark: "#5B4636",
      },
    },
  },
  plugins: [],
};
