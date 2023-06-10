/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        booksyGreen: "#0ba3ad",
        booksyGray: "#2a2d32",
        booksyBlack: "#000000",
        booksyWhite: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
