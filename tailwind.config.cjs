const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-abril)', ...fontFamily.serif]
      },
      animation: {
        openmenu: 'openmenu 1s ease-in',
        closemenu: 'closemenu 1s ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { left: '-224px' },
          // final position
          '100%': { left: '0px' }
        },
        closemenu: {
          // initial position
          '0%': { left: '0px' },
          // final position
          '100%': { left: '-224px' }
        },
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('@tailwindcss/aspect-ratio'),],
  daisyui: {
    styled: true,
    //themes: [require("./src/styles/theme/daisy.js")],
    themes: ['cupcake', 'dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
