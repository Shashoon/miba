import React from "react";
import { StyleSheet } from "react-native";
import { Chip, ChipProps } from "react-native-paper";

const PrimaryChip: React.FC<ChipProps> = ({ children, ...props }) => {
  return (
    <Chip mode="flat" style={styles.primaryInput} {...props}>
      {children}
    </Chip>
  );
};

const styles = StyleSheet.create({
  primaryInput: {
    // backgroundColor: "#e3e3e3",
    alignItems: "center",
  },
});

export default PrimaryChip;
