// PrimaryButton.tsx
import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { StyleSheet } from "react-native";

const PrimaryTextButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      mode="text"
      labelStyle={{
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginTop: 0,
      }}
      style={{
        paddingTop: 3,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryTextButton;
