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
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '2rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'promo-color': '#6b068ae8'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.3125rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'button-submit': '20px',
        'input-number': '5px',
      }
    },
  },
  plugins: [],
}

