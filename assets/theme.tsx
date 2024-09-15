import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const black = "#1a181b";
const white = "#fcf7ff";
const primary = "#9DBF9E";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    onPrimary: black,
    // primaryContainer: "yellow",
    // onPrimaryContainer: "red",
    secondary: "red",
    // onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "#E6E8E6",
    // onSecondaryContainer: "rgb(20, 70, 20)", // Dark Green
    // tertiary: "rgb(255, 69, 0)", // Red-Orange
    // onTertiary: "rgb(255, 255, 255)", // White
    // tertiaryContainer: "rgb(255, 182, 193)", // Light Red
    // onTertiaryContainer: "rgb(100, 0, 0)", // Dark Red
    // error: "rgb(255, 0, 0)", // Red
    // onError: "rgb(255, 255, 255)", // White
    // errorContainer: "rgb(255, 192, 203)", // Light Red
    // onErrorContainer: "rgb(100, 0, 0)", // Dark Red
    // background: "rgb(240, 255, 240)", // Light Green
    // onBackground: "rgb(0, 100, 0)", // Dark Green
    // surface: "rgb(230, 230, 250)", // Light Blue
    // onSurface: "rgb(0, 0, 139)", // Dark Blue
    // surfaceVariant: "rgb(144, 238, 144)", // Light Green
    // onSurfaceVariant: "rgb(34, 139, 34)", // Dark Green
    // outline: "rgb(0, 0, 128)", // Dark Blue
    // outlineVariant: "red", // Darker Blue
    // shadow: "rgb(50, 50, 50)", // Dark Grey
    // scrim: "rgb(0, 0, 0)", // Black
    // inverseSurface: "rgb(60, 179, 113)", // Medium Green
    // inverseOnSurface: "rgb(255, 255, 255)", // White
    // inversePrimary: "rgb(70, 130, 180)", // Steel Blue
    // elevation: {
    //   level0: "transparent",
    //   level1: "rgb(224, 255, 255)", // Light Blue
    //   level2: "rgb(173, 216, 230)", // Lighter Blue
    //   level3: "rgb(135, 206, 250)", // Sky Blue
    //   level4: "rgb(100, 149, 237)", // Cornflower Blue
    //   level5: "rgb(0, 191, 255)", // Deep Sky Blue
    // },
  },
};

export default theme;
