import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const primary = "#F55C3D";
const lightPrimary = "#F99D8B";
const oldPrimary = "#9DBF9E"; // green
const black = "#1a181b";
const white = "rgb(255, 255, 255)";
const blue = "#68CBDF";
const green = "#70D7B9";
const gray = "#8e8e8f";
const purple = "#CAA8F5";
const darkGray = "#737074";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    onPrimary: white,
    secondary: "red",
    secondaryContainer: "#E6E8E6",
    onSecondaryContainer: primary,
    purple: purple,
    blue: blue,
    lightPrimary: "#E6E8E6",
    green: green,
    gray: gray,
    white: white,
    black: black,
    darkGray: darkGray,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "Montserrat-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Montserrat-Medium",
      fontWeight: "normal",
    },
  },
};

export default myTheme;

// import { DefaultTheme } from "react-native-paper";

// const customTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: primary,
//     onPrimary: white,
//     secondary: "red",
//     secondaryContainer: "#E6E8E6",
//     onSecondaryContainer: primary,
//     purple: "#CAA8F5",
//     blue: blue,
//   },
// };

// export default customTheme;
