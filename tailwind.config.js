/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundColor: ['hover'],
      },
    },
    plugins: [],
  };
  module.exports = {
    darkMode: "media", // Enables dark mode with .dark class
    content: ["./*.{html,js,tsx,jsx}"], // Adjust based on your file structure
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "4k": "2840px",
        "2xl": "1536px",
     
      },
      extend: {},
      
            colors: {
              teal: {
                50: '#f0fdfa',
                100: '#ccfbf1',
                200: '#99f6e4',
                300: '#5eead4',
                400: '#2dd4bf',
                500: '#14b8a6',
                600: '#0d9488',
              },
              blue: {
                50: '#eff6ff',
                100: '#dbeafe',
              },
      }
    },
    plugins: [],
  };
  