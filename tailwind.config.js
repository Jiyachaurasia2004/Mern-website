/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0B1120',
        'primary-orange': '#F97316',
        'primary-green': '#22C55E'
      }
    },
  },
  plugins: [],
}
