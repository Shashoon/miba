// PrimaryButton.tsx
import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { StyleSheet } from "react-native";

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      mode="contained-tonal"
      style={styles.button}
      contentStyle={styles.content}
      labelStyle={styles.label}
      {...props}
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {},
  content: {
    // Customize content style if needed
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SecondaryButton;
