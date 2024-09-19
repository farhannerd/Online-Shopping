/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
      themeLight: {
        100: 'rgb(255, 248, 232)',
        200: 'rgb(247, 238, 211)',
        300: 'rgb(170, 179, 150)',
        400: 'rgb(103, 70, 54)',
      },
      themeDark: {
        100: 'rgb(246, 233, 107)',
        200: 'rgb(190, 220, 116)',
        300: 'rgb(162, 202, 113)',
        400: 'rgb(56, 127, 57)',
      }
    }
  },
  plugins: [],
}