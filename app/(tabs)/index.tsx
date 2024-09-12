import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Image, Platform, StyleSheet, TextInput } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { signIn, signOut } from "@/src/redux/features/authSlice";
import { useAppSelector } from "@/src/redux/store";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

// SignUp function for AWS Amplify
// export async function SignUp(
//   { username, password, email, phone_number }: SignUpParameters,
//   dispatch: any // Pass the dispatch function to call login action
// ) {
//   try {
//     console.log("1-1-1", username, email);
//     const { user } = await Auth.signUp({
//       username,
//       password,
//       attributes: {
//         email, // optional
//         phone_number, // optional - E.164 number convention
//       },
//     });

//     const userDataKey = user?.username;
//     console.log("user", user);
//     Alert.alert("Success", "User signed up successfully");

//     dispatch(signIn({ username, userDataKey })); // Dispatch login action with both username and userDataKey
//   } catch (error) {
//     console.log("Error signing up:", error);
//     Alert.alert("Error", "Failed to sign up: " + error);
//   }
// }

export default function HomeScreen() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch(); // Create dispatch hook for Redux actions
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const handleSignUp = () => {
  //   SignUp({ username, password, email, phone_number: phoneNumber }, dispatch);
  // };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const user = await Auth.signIn(username, password);
      console.log("Signed in user:", user);
      dispatch(
        signIn({ username: user.username, userDataKey: user.userDataKey })
      );
    } catch (error) {
      setLoading(false);
      console.log("Error signing in:", error);
      setError(true);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    console.log("123");
    try {
      await Auth.signOut({ global: true });
      dispatch(signOut());
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <HelloWave />
        </ThemedView>

        {/* Show login status */}

        {/* Signup Form */}
        <ThemedView style={styles.formContainer}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Button loading={loading} onPress={handleSignIn}>
            SIGN up
          </Button>
          <Button
            loading={loading}
            icon="camera"
            mode="contained"
            onPress={handleSignIn}
          >
            login
          </Button>
          <Button loading={loading} onPress={handleSignOut}>
            Logout
          </Button>
        </ThemedView>

        {/* Other Content */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1:</ThemedText>
          <ThemedText type="title">{`Welcome! ${
            auth.isAuth ? auth.username : "no"
          }`}</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
      {error && (
        <Snackbar
          duration={50}
          onDismiss={() => console.log("dis")}
          visible={error}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  loginStatus: {
    marginVertical: 16,
    padding: 12,
    backgroundColor: "#e0ffe0",
    borderRadius: 5,
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  formContainer: {
    padding: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 8,
    borderRadius: 5,
  },
});
