import React from "react";
import { TextProps, TextStyle } from "react-native";
import { Text } from "react-native-paper";

interface PrimaryTextProps {
  style?: TextStyle;
  children: React.ReactNode;
}

const PrimaryText: React.FC<PrimaryTextProps> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <Text
      style={{
        color: "#F55C3D",
        fontWeight: "600",
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default PrimaryText;
