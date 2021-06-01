module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        cyan: "#17a2b8",
        red: "#dc3545",
        dark: "#212529",
        light: "#f8f9fa",
        gray: "#6c757d",
        graydark: "#343a40",
        green: "#28a745",
        indigo: "#6610f2",
        purple: "#7d5fff",
        orange: "#fd7e14",
        pink: "#e83e8c",
        yellow: "#ffc107",
        white: "#ffffff",
      },
      fontFamily: {
        circular: "CircularStd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
