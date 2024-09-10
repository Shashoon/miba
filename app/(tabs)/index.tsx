import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

// SignUp function for AWS Amplify
export async function SignUp({
  username,
  password,
  email,
  phone_number,
}: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
      },
      autoSignIn: {
        enabled: true, // optional - enables auto sign-in after user is confirmed
      },
    });
    Alert.alert("Success", "User signed up successfully");
  } catch (error) {
    console.log("Error signing up:", error);
    Alert.alert("Error", "Failed to sign up: " + error);
  }
}

// SignIn function for AWS Amplify
export async function SignIn(
  username: string,
  password: string,
  setUser: (username: string | null) => void
) {
  try {
    const user = await Auth.signIn(username, password);
    console.log("Signed in user:", user);
    setUser(username); // Set the signed-in user
    Alert.alert("Success", `User ${username} signed in successfully`);
  } catch (error) {
    console.log("Error signing in:", error);
    Alert.alert("Error", "Failed to sign in: " + error);
  }
}

// SignOut function for AWS Amplify
export async function SignOut(setUser: (username: string | null) => void) {
  try {
    await Auth.signOut();
    setUser(null); // Reset the user state on sign-out
    Alert.alert("Success", "User signed out successfully");
  } catch (error) {
    console.log("Error signing out:", error);
    Alert.alert("Error", "Failed to sign out: " + error);
  }
}

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null); // Track signed-in user

  const handleSignUp = () => {
    SignUp({ username, password, email, phone_number: phoneNumber });
  };

  const handleSignIn = () => {
    SignIn(username, password, setLoggedInUser); // Pass setUser to update the signed-in user state
  };

  const handleSignOut = () => {
    console.log("c");
    SignOut(setLoggedInUser); // Pass setUser to clear the signed-in user state
  };

  return (
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
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Show login status */}
      {loggedInUser && (
        <ThemedView style={styles.loginStatus}>
          <ThemedText>User {loggedInUser} is logged in!</ThemedText>
        </ThemedView>
      )}

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
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="Sign In" onPress={handleSignIn} />
        <Button title="Sign Out" onPress={handleSignOut} />
      </ThemedView>

      {/* Other Content */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">{username} is log in</ThemedText>{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
