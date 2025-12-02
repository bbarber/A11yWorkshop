/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          // 600: "#dc2626",
          600: "#d72525",
        },
      },
    },
  },
  plugins: [],
};
