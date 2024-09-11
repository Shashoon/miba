import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Auth } from "aws-amplify";

export default function Login() {
  const onChange = () => {};

  return (
    <View style={styles.pageContainer}>
      <Text>login</Text>

      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          secureTextEntry
          right={<TextInput.Icon icon="email" />}
          style={styles.primaryInput}
          underlineColor="transparent"
          activeUnderlineColor="gray"
          textColor="#1a181b"
          underlineStyle={styles.inputUnderline}
          onChangeText={onChange}
        />
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          style={styles.primaryInput}
          underlineColor="transparent"
          activeUnderlineColor="gray"
          textColor="#1a181b"
          underlineStyle={styles.inputUnderline}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    width: "80%",
    gap: 10,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  primaryInput: {
    backgroundColor: "white",
  },
  inputUnderline: {
    height: 0.5,
  },
});
