/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#101828",
        panel: "#f8fafc",
        accent: "#0f766e",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 24, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
