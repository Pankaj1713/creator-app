const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      lato: "Lato",
    },

    extend: {
      backgroundImage: {
        community: "url('/images/landingPage/community.png')",
      },
      colors: {
        darkGray: "#554B5E",
        // gray: "#CCC9DO",
        textGray: "#564E60",
        backgroundColor: "#F7F4FA",
        backgroundColortextViolet: "#EBD6FF",
        borderColor: "#C5C2C8",
        accent: "#77FF33",
        indigo: "#3F51B5",
        primary: "#9933FF",
        textWhite: "#FCFAFF",
        textBlack: "#0D001A",
        textBlue: "#6600CC",
        textViolet: "#4C0099",
        "sky-textBlue": "#1155CC",
        "light-pink": "#F2E5FF",
        "light-green": "#DDFFCC",
        lightGray: "#666666",
        "light-pink-300": "#F1E8FA",
        bgColor: "#FCFBFD",
        errorColor: "#FF3333",
        lighttextBlack: "#2C2138",
        linearColor1: "#77FF33",
        linearColor2: "#FFFFFF",
        disabledColor: "#AC9CB0",
        bgColorViolet_300: "#E5CCFE",
        greenThemeBgColor: "#D0EBCC",
      },
    },
  },
  plugins: [],
});
