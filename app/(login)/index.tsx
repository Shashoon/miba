import {
  PrimaryButton,
  PrimaryChip,
  PrimaryInputText,
  PrimaryTextButton,
} from "@/components";
import PrimaryText from "@/components/texts/PrimaryText";
import { AuthService } from "@/services/authService";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const authService = new AuthService();

  const handleSignIn = () => {
    // authService.SignIn(username, password).then((res: CognitoUser) => {
    //   if (res) {
    //     console.log("user signed in - ", res.getUsername());
    //     router.navigate("/(tabs)");
    //   }
    // });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.formContainer}>
        <PrimaryInputText
          label="Username"
          value={username}
          right={<TextInput.Icon icon="account" color={"#E6E8E6"} />}
          onChangeText={setUsername}
        />

        <PrimaryInputText
          label="Password"
          value={password}
          secureTextEntry
          right={<TextInput.Icon icon="key" color={"#E6E8E6"} />}
          onChangeText={setPassword}
        />

        <View style={styles.messageContainer}>
          <PrimaryButton onPress={handleSignIn}>Sign In</PrimaryButton>

          <PrimaryChip icon="information">
            <Text variant="labelSmall">Don`t have an account ? </Text>
            <Text
              variant="headlineSmall"
              onPress={() => router.navigate("/(login)/signup")}
            >
              Click here
            </Text>
          </PrimaryChip>
        </View>
      </View>

      <Button onPress={() => router.navigate("/(tabs)/")}>home</Button>
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
    borderWidth: 1,
    borderColor: "#ddddd",
  },
  inputUnderline: {
    display: "none",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  messageLabel: {
    display: "flex",
    flexDirection: "row",
  },
  clickableText: {
    color: "rgb(142 130 172)",
    fontWeight: "600",
  },
});
