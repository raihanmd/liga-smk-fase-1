module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3824e1",
        accent: "#f0f3ff",
        yellow: {
          primary: "#f9c94a",
          secondary: "#fef0e5",
          accent: "#fcd4a4",
        },
        gray: {
          primary: "#f0f3ff",
        },
        membership: "#fef0e5",
        footer: "#090f22",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
