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
        openmenu: 'openmenu 0.5s ease-in',
        closemenu: 'closemenu 0.5s ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { bottom: '-50vh' },
          // final position
          '100%': { bottom: '0px' }
        },
        closemenu: {
          // initial position
          '0%': { bottom: '0px' },
          // final position
          '100%': { bottom: '-50vh' }
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
