// PrimaryButton.tsx
import React from "react";
import { Button, ButtonProps, TextProps } from "react-native-paper";
import { Pressable, Text, PressableProps, StyleSheet } from "react-native";

const PrimaryTextButton: React.FC<PressableProps> = ({
  children,
  ...props
}) => {
  return <Pressable {...props}>{children}</Pressable>;
};

export default PrimaryTextButton;
