import * as React from "react";
import {
  IconButton as PaperIconButton,
  IconButtonProps as PaperIconButtonProps,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

// Define the props for your custom IconButton
interface IconButtonProps extends Omit<PaperIconButtonProps, "icon"> {
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
}

const PrimaryIconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconColor,
  ...rest
}) => {
  return (
    <PaperIconButton
      icon={({ size, color }) => (
        <Ionicons name={iconName} size={size} color={iconColor || color} />
      )}
      {...rest}
    />
  );
};

export default PrimaryIconButton;
