module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary_bg: "#c70039",
      seconDary_bg: "#efefef",
      primary_text: "#777",
      blue: "#008cff",
      white: "#fff"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
