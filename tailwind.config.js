/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        "margin-clamp": "clamp(1.13rem, calc(0.65rem + 2.39vw), 2.50rem)"
      },
      padding: {
        "padding-clamp": "clamp(1.13rem, calc(0.65rem + 2.39vw), 2.50rem)"
      }
    },
  },
  plugins: [],
}