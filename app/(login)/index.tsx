import { AuthService } from "@/services/authService";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const theme = useTheme();

  const authService = new AuthService();

  const handleSignIn = () => {
    authService.SignIn(username, password).then((res: CognitoUser) => {
      console.log("user signed in - ", res.getUsername());
      router.navigate("/(tabs)");
    });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.formContainer}>
        <TextInput
          label="Username"
          value={username}
          right={<TextInput.Icon icon="account" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"rgb(202, 196, 208)"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setUsername}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry
          right={<TextInput.Icon icon="key" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"rgb(202, 196, 208)"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setPassword}
        />

        <View style={styles.messageContainer}>
          <Button mode="contained-tonal" onPress={handleSignIn}>
            Sign In
          </Button>

          <View style={styles.messageLabel}>
            <Text>Don`t have account ? </Text>
            <Pressable>
              <Text
                style={styles.clickableText}
                onPress={() => router.navigate("/(login)/signup")}
              >
                Click here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  formContainer: {
    display: "flex",
    width: "80%",
    gap: 15,
  },
  primaryInput: {
    backgroundColor: "white",
    borderRadius: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  inputUnderline: {
    display: "none",
  },
  messageContainer: {
    alignItems: "center",
    gap: 10,
  },
  messageLabel: {
    display: "flex",
    flexDirection: "row",
  },
  clickableText: {
    color: "rgb(142 130 172)",
  },
});
