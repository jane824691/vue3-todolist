/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  safelist: [
    {
      pattern: /btn-1/,
    },
  ],
  plugins: [],
}
