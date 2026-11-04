/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf3f4",
          100: "#fbe4e6",
          200: "#f5c7cc",
          300: "#e99ba4",
          500: "#a63a46",
          600: "#8a2332",
          700: "#701c28",
          800: "#5a1520",
          900: "#3f0e16",
        },
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(90, 21, 32, 0.15)",
      },
    },
  },
  plugins: [],
};