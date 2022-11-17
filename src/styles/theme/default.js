/** @type {import('tailwindcss').Config["theme"]} */
module.exports = {
  fontFamily: {
    inter: ["Inter", "sans-serif"],
    montserrat: ["Montserrat", "sans-serif"],
  },
  extend: {
    colors: {
      primary: "#00B09B",
      warning: "#5A4B25",
      background: "#2D2D2D",
      white: {
        DEFAULT: "#FFFFFF",
        200: "#F2F2F2",
        300: "#A6A6A6",
      },
      grayscale: {
        100: "#616161",
        200: "#393939",
      },
      status: {
        error: {
          DEFAULT: "#C9546A",
          shadow: "#5C2630",
        },
        warning: {
          DEFAULT: "#C9A154",
          shadow: "#5A4B25",
        },
        info: {
          DEFAULT: "#548AC9",
          shadow: "#375286",
        },
        success: {
          DEFAULT: "#54C975",
          shadow: "#24402F",
        },
      },
    },
  },
};
