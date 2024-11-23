/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0)', transformOrigin: 'center' },
          '25%': { transform: 'rotate(-5deg)', transformOrigin: 'center' },
          '75%': { transform: 'rotate(5deg)', transformOrigin: 'center' },
        }
      },
      animation: {
        shake: 'shake 0.8s ease-in-out infinite', 
      }
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}


export default config; 
