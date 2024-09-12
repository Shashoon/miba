import React, { useState } from "react";
import { TextInput, Button, Snackbar, Text } from "react-native-paper";
import { useDispatch } from "react-redux";

import {
  useSignInMutation,
  useSignOutMutation,
} from "@/src/redux/features/authApi";
import { useAppSelector } from "@/src/redux/store";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const auth = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [
    signIn,
    { isLoading: isSignInLoading, isError: isSignInError, error: signInError },
  ] = useSignInMutation();

  const [signOut, { isLoading: isSignOutLoading }] = useSignOutMutation();

  const handleSignIn = () => {
    signIn({ username, password }).unwrap();
  };

  const handleSignOut = async () => {
    await signOut({}).unwrap();
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
      <Text>skp {auth.user}</Text>
      {isSignInError && (
        <Snackbar visible={true} onDismiss={() => console.log("jjjj")}>
          {"Sign in failed"}
        </Snackbar>
      )}
    </>
  );
}
