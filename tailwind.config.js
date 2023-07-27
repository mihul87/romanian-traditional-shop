module.exports = {
  theme: {
    extend: {
      colors: {
        "orient": {
          default: "#276276", // primary
          dark: "#202e78",
          light: "#d8ebf2"
        },
        "neon-carrot": {
          default: "#F99A2B",
          light: "#faae55"
        },
        "sapphire": {
          default: "#0F1C4F",
        },
        "burgundy": {
          default: "#700519",
        },
        "rustic-red": {
          default: "#1A1215",
        },
      }
    }
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
      borderColor: ['active'],
      backgroundColor: ['active'],
      animation: ['motion-safe'],
    }
  },
  plugins: []
};
