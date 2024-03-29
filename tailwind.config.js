/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   backgroundImage: {},
   fontFamily: {
    ibmplex: ["IBM Plex Sans", "sans-serif"],
    ibmplexBold: ["IBM Plex Sans", "sans-serif"],
    mavenPro: ["Maven Pro", "sans-serif"],
   },
  },
 },
 plugins: [require("daisyui")],
 daisyui: {
  themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  base: false, // applies background color and foreground color for root element by default
  styled: false, // include daisyUI colors and design decisions for all components
  utils: true, // adds responsive and modifier utility classes
  prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  themeRoot: ":root", // The element that receives theme color CSS variables
 },
};
