const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/renderer/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {},
  variants: {},
  darkMode: "class",
  plugins: [nextui()],
};