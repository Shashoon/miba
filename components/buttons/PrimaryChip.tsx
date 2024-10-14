import React from "react";
import { Chip, ChipProps } from "react-native-paper";

const PrimaryChip: React.FC<ChipProps> = ({ children, ...props }) => {
  return (
    <Chip mode="flat" {...props}>
      {children}
    </Chip>
  );
};

export default PrimaryChip;
