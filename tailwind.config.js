const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      padding: {
        "3.5" : "0.875rem",
        "13.5" : "3.375rem",
        "15" : "60px",
      },
      margin: {
        "15" : "60px",
        "23" : "92px"
      },
      borderRadius: {
        "4xl" : "32px"
      },
      borderWidth: {
        "1.5" : "1.5px"
      },
      gap:{
        "1.4" : "6px"
      },
      colors: {
        "background": {
          100: "#F9FAFB"
        },
        "primary": {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764"
        },
        "secondary": {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
        },

        // un used for now
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",                
        "blue-gray": {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#0F172A",
          950: "#172554"
      },
      // end un used 

      
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
  },
  plugins: [],
}

