import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

const PrimaryInputText: React.FC<TextInputProps> = ({ children, ...props }) => {
  return (
    <TextInput
      style={styles.primaryInput}
      underlineStyle={styles.inputUnderline}
      {...props}
    >
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  primaryInput: {
    backgroundColor: "white",
    borderEndEndRadius: 15,
    borderStartStartRadius: 15,
    borderEndStartRadius: 15,
    borderStartEndRadius: 15,
  },
  inputUnderline: {
    display: "none",
  },
});

export default PrimaryInputText;
