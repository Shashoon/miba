import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const primary = "#F55C3D";
const lightPrimary = "#ffab79";
const darkPrimary = "#F66C51";
const oldPrimary = "#9DBF9E"; // green
const black = "#1a181b";
const white = "rgb(255, 255, 255)";
const blue = "#a8f0ff";
const green = "#abf1dd";
const gray = "#8e8e8f";
const purple = "#CAA8F5";
const darkGray = "#737074";
const yellow = "#FBD87F";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    onPrimary: white,
    secondary: "red",
    secondaryContainer: "#E6E8E6",
    onSecondaryContainer: primary,
    primary: primary,
    lightPrimary: lightPrimary,
    darkPrimary: darkPrimary,
    blue: blue,
    purple: purple,
    green: green,
    gray: gray,
    white: white,
    black: black,
    darkGray: darkGray,
    yellow: yellow,
  },
  fonts: {
    ...DefaultTheme.fonts,
    bodySmall: {
      fontFamily: "montserratRegular",
      fontWeight: "normal" as "normal",
      fontSize: 14,
    },
    bodyMedium: {
      fontFamily: "montserratRegular",
      fontWeight: "normal" as "normal",
      fontSize: 16,
    },
    bodyLarge: {
      fontFamily: "montserratRegular",
      fontWeight: "normal" as "normal",
      fontSize: 18,
    },
    labelSmall: {
      fontFamily: "montserratMedium",
      fontWeight: "normal" as "normal",
      fontSize: 14,
    },
    labelMedium: {
      fontFamily: "montserratMedium",
      fontWeight: "normal" as "normal",
      fontSize: 16,
    },
    labelLarge: {
      fontFamily: "montserratMedium",
      fontWeight: "normal" as "normal",
      fontSize: 18,
    },
    headlineSmall: {
      fontFamily: "montserratBold",
      fontWeight: "normal" as "normal",
      fontSize: 14,
    },
    titleSmall: {
      fontFamily: "montserratMedium",
      fontWeight: "normal" as "normal",
      fontSize: 18,
    },
    titleMedium: {
      fontFamily: "montserratBold",
      fontWeight: "normal" as "normal",
      fontSize: 22,
    },

    titleLarge: {
      fontFamily: "montserratExtraBold",
      fontWeight: "normal" as "normal",
      fontSize: 42,
    },
  },
};

export default myTheme;
