import React, { useEffect, useState } from "react";
import { TextInput, Button, Snackbar, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import {
  useSignInMutation,
  useSignOutMutation,
} from "@/src/redux/features/authApi";
import { setUser } from "@/src/redux/features/userSlice";
import { useAppSelector } from "@/src/redux/store";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("roeigr7");
  const [password, setPassword] = useState("Roeimsn10");
  const user = useAppSelector((state) => state.user); // Get the user data from Redux

  const [
    signIn,
    { isLoading: isSignInLoading, isError: isSignInError, error: signInError },
  ] = useSignInMutation();

  const [signOut, { isLoading: isSignOutLoading }] = useSignOutMutation();

  const handleSignIn = async () => {
    try {
      await signIn({ username, password }).unwrap();
      // Dispatching the user update inside the mutation handler ensures it gets updated in Redux
      dispatch(setUser(username));
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const handleSignOut = async () => {
    await signOut().unwrap();
    dispatch(setUser(null));
  };
  return (
    <>
      <TextInput label="Username" value={username} onChangeText={setUsername} />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button loading={isSignInLoading} mode="contained" onPress={handleSignIn}>
        Sign In
      </Button>
      <Button
        loading={isSignOutLoading}
        mode="contained"
        onPress={handleSignOut}
      >
        Sign Out
      </Button>
      <Text>skp "auth" - {user.user}</Text>
      {isSignInError && (
        <Snackbar visible={true} onDismiss={() => console.log("jjjj")}>
          {"Sign in failed"}
        </Snackbar>
      )}
    </>
  );
}
