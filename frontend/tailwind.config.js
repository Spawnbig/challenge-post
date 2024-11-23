/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}


export default config; 
