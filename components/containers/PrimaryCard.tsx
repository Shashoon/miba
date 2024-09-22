import * as React from "react";
import { Surface, SurfaceProps, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const PrimaryCard: React.FC<SurfaceProps> = ({ children, style, ...props }) => (
  <Surface
    style={[styles.surface, style]}
    elevation={1}
    mode="elevated"
    {...props}
  >
    {children}
  </Surface>
);

const styles = StyleSheet.create({
  surface: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
  },
});

export default PrimaryCard;
