/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#5A85B0",
        otro: "#915AB0",
        orange: "#ec008c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "blue-700": "#5A85B0",
        "blue-800": "#434343",
        "red-500": "#e31d1d",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/roomCyber2.jpg')",
        "edu-pattern": "url('/src/assets/herobg.png')",
        "bluecard-pattern": "url('/src/assets/cardsSrv3c.png')",
        "card-pattern": "url('/src/assets/cardsSrv3N.png')",
        "hole-pattern": "url('/src/assets/bhole.png')",
      },
    },
  },
  plugins: [],
};
