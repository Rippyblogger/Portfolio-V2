module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            dark: "#AC121F",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
