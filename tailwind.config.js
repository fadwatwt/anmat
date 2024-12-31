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
          150:"#CDD0D5",
          200: "#C2D6FF",
          300: "#ADC8FF",
          400: "#84A9FF",
          500: "#375DFB",
          600: "#2E4CDB",
          700: "#253EA7",
          800: "#1B2B91",
          900: "#101A66",
          lighter:"#EBF1FF",
          base:"#375DFB"
        },
        gray:{
          800:"#20232D",
          900:"#161922"
        },
        soft:{
          200:"#E2E4E9",
          400:"#757C8A"
        },
        sub:{
          300:"#CDD0D5"
        },
        white:{
          DEFAULT: "#fff",
          0:"#20232D",
        },
        veryWeak:{
          50:"#31353F"
        },
        main:{
          900:"#F6F8FA",
        },
        black:{
          DEFAULT: "#000",
        }
      },
      fontFamily: {
        ar: ['"Almarai"', 'sans-serif'], // الخط المستخدم للغة العربية
        default: ['"Roboto"', 'sans-serif'], // الخط الافتراضي للغات الأخرى
      },
    },
  },
  plugins: [],
}