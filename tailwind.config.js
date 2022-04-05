module.exports = {
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
        muted: "#adb5bd",
        graylight: "#DFDFDF",
        darkgreen: "#28a745",
        green: "#32FF7E",
        indigo: "#6610f2",
        purple: "#7d5fff",
        purplemedium: "#D9D1FF",
        purplelight: "#F7F5FF",
        orange: "#fd7e14",
        pink: "#e83e8c",
        yellow: "#ffc107",
        white: "#ffffff",
        black: "#212529",
      },
      fontFamily: {
        circular:
          '"CircularStd", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      backgroundImage: {
        "about-cover": "url('/meeting.jpg')",
        "events-cover": "url('/ttbstadium_flip.jpg')",
        "contact-cover": "url('/article-6.jpg')",
      },
      boxShadow: {
        block: "0.5rem 0.5rem 0 rgb(233 236 239 / 50%)",
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
    },
  },
  variants: {},
  plugins: [],
};
