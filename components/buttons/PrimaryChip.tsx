import React from "react";
import { StyleSheet } from "react-native";
import { Chip, ChipProps } from "react-native-paper";

const PrimaryChip: React.FC<ChipProps> = ({ children, ...props }) => {
  return (
    <Chip mode="flat" textStyle={styles.chipText} {...props}>
      {children}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chipText: {
    color: "black",
    fontWeight: "500",
  },
});

export default PrimaryChip;
