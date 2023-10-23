/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 2px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

