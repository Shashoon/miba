import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  // Specify custom property
  primaryButton: {},
  // Specify custom property in nested object
  colors: {
    // ...DefaultTheme.colors,
    primary: "red",
    primaryLight: "blue",
    secondary: "#419D78",
    onPrimary: "red",
    primaryContainer: "red",
    black: "#0B2027",
    white: "#EEEEEE",
  },
};

export default theme;
