const theme = {
  /* Colors */
  colors: {
    white: "#ffffff",
    black: "#262626",
    grey: "#82908d",
    lightgrey: "whitesmoke",
    red: "#b04846",
    green: "#89af5b",
    yellow: "#F2C57C",
    blue: "#4082c3",

    // aliased colors
    primary: "#89af5b",
    caution: "#b04846",
    background: "#ffffff",
    disabled: "whitesmoke",
    text: "#262626",
    border: "#82908d",
  },

  /* Layout, spacing */
  layout: [],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  sizes: ["1em", "2em", "4em", "8em", "16em", "24em", "32em", "48em", "64em"],

  /* Borders */
  borders: {
    standard: "1px solid",
  },
  radii: {
    none: 0,
    standard: 5,
    rounded: 20,
  },

  /* Shadows */
  shadows: {
    depth1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    depth2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    depth3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    depth4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    depth5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },

  /* Typography */
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fonts: {
    body: "Courier",
    heading: "Helvetica",
  },
  fontWeights: ["light", "normal", "bold"],
};

export default theme;
