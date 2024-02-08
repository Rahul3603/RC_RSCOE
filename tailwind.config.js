const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      ...colors,
      primary: "#be123c",
                "primary-content": "#fbd4de",
                "primary-dark": "#8f0e2d",
                "primary-light": "#e91a4c",

                secondary: "#123cbe",
                "secondary-content": "#d4defb",
                "secondary-dark": "#0e2d8f",
                "secondary-light": "#1a4ce9",

                background: "#f0f0f0",
                foreground: "#fbfbfb",
                border: "#dfdfdf",

                copy: "#262626",
                "copy-light": "#666666",
                "copy-lighter": "#8c8c8c",

                success: "#12be12",
                warning: "#bebe12",
                error: "#be1212",

                "success-content": "#d4fbd4",
                "warning-content": "#000000",
                "error-content": "#fbd4d4",
                
      'rc-white': { DEFAULT: '#fdfffc', 100: '#226500', 200: '#43ca00', 300: '#75ff30', 400: '#b8ff95', 500: '#fdfffc', 600: '#fcfffb', 700: '#fdfffc', 800: '#fefffd', 900: '#fefffe' },
      'rc-blue': { DEFAULT: '#0066ff', 100: '#001433', 200: '#002966', 300: '#003d99', 400: '#0052cc', 500: '#0066ff', 600: '#3385ff', 700: '#66a3ff', 800: '#99c2ff', 900: '#cce0ff' }, 
      'rc-red': { DEFAULT: '#be123c', 100: '#26040c', 200: '#4d0718', 300: '#730b25', 400: '#990e31', 500: '#be123c', 600: '#eb2355', 700: '#f05a7f', 800: '#f591aa', 900: '#fac8d4' }, 
      'rc-yellow': { DEFAULT: '#f1d302', 100: '#302a00', 200: '#615401', 300: '#917e01', 400: '#c2a802', 500: '#f1d302', 600: '#fde12d', 700: '#fde961', 800: '#fef096', 900: '#fef8ca' },
      'rc-black': { DEFAULT: '#020100', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#020100', 600: '#663300', 700: '#cc6600', 800: '#ff9933', 900: '#ffcc99' }
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
