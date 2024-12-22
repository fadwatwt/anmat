/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4F9FF",
          100: "#EBF2FF",
          200: "#D6E4FF",
          300: "#ADC8FF",
          400: "#84A9FF",
          500: "#375DFB",
          600: "#2E4CDB",
          700: "#243BB6",
          800: "#1B2B91",
          900: "#101A66",
        },
      },
    },
  },
  plugins: [],
}