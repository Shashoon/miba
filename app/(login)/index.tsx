import { PrimaryButton, PrimaryChip, PrimaryInputText } from "@/components";
import { AuthService } from "@/services/authService";
import { RootState } from "@/services/store/store";
import { setUser } from "@/services/store/userSlice";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Amplify, Auth } from "aws-amplify";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import awsmobile from "@/src/aws-exports";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const authService = new AuthService();
  Amplify.configure(awsmobile);

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        // Check if there is an authenticated user
        const res = await authService.GetCurrentUser();

        if (res) router.navigate("/(tabs)/");
      } catch (error) {
        // No user is signed in
        setIsAuthenticated(false);
      }
    };

    checkUserAuth();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const res = await authService.GetCurrentUser();

      if (res) {
        dispatch(
          setUser({
            email: res.getUsername(),
            name: username,
            id: "",
          })
        );

        Alert.alert(res, "is signed in");

        router.navigate("/(tabs)/");
      }
    };

    getUser();
  }, []);

  function handleSignIn() {
    authService.SignIn(username, password).then((res: CognitoUser) => {
      try {
        console.log("user signed in - ", res.getUsername());
        router.navigate("/(tabs)");
        dispatch(
          setUser({
            email: res.getUsername(),
            name: username,
            id: "",
          })
        );
      } catch (err) {
        console.log(err);
      }

      console.log(user);
    });
  }

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
