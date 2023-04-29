/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        castoro: ["Castoro Titling", "serif"],
        lobster: ["Lobster", "serif"],
      },
    },
  },
  plugins: [],
}
