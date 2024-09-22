import * as React from "react";
import { Surface, SurfaceProps, Text } from "react-native-paper";
import { ColorValue, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface PrimaryContainerProps extends SurfaceProps {
  bgColor: string;
  children: React.ReactNode;
}

const PrimaryContainer: React.FC<PrimaryContainerProps> = ({
  children,
  bgColor,
  style,
  ...props
}) => (
  <Surface
    style={[styles.surface, { backgroundColor: bgColor as string }, style]}
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

export default PrimaryContainer;
