module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#1AC9E7",
        bluelight: "#E8F9FD",
        cyan: "#15acc6",
        red: "#dc3545",
        dark: "#212529",
        light: "#f8f9fa",
        gray: "#495057",
        graymed: "#6c757d",
        graylight: "#DFDFDF",
        green: "#32FF7E",
        indigo: "#6610f2",
        purple: "#7d5fff",
        purplelight: "#F7F5FF",
        orange: "#fd7e14",
        pink: "#e83e8c",
        yellow: "#ffc107",
        white: "#ffffff",
        black: "#212529"
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
