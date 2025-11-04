/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4fbf7',
          100: '#e6f7ee',
          200: '#c7ebd8',
          300: '#a4dfc0',
          400: '#66c89a',
          500: '#33b37a',
          600: '#219865',
          700: '#1a7a52',
          800: '#165f42',
          900: '#124d36'
        }
      }
    },
  },
  plugins: [],
}
