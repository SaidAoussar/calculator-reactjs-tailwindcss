/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#AEB3BA",
          200: "#425062",
          300: "#404D5E",
          400: "#3A4655"
        }
      }
    }
  },
  plugins: []
};
