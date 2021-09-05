module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        height10: "10vh",
        height15: "15vh",
        height20: "20vh",
        height30: "30vh",
        height40: "40vh",
        height50: "50vh",
        height55: "55vh",
        height60: "60vh",
        height70: "70vh",
        height80: "80vh",
        height90: "90vh",
        height100: "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
