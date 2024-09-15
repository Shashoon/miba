import React, { useEffect, useState } from "react";
import { TextInput, Button, Snackbar, Text } from "react-native-paper";

import {
  useCurrentAuthenticatedUserQuery,
  useSignInMutation,
  useSignOutMutation,
} from "@/src/redux/features/authApi";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, isLoading } = useCurrentAuthenticatedUserQuery();

  const [
    signIn,
    { isLoading: isSignInLoading, isError: isSignInError, error: signInError },
  ] = useSignInMutation();

  const [signOut, { isLoading: isSignOutLoading }] = useSignOutMutation();

  const handleSignIn = () => {
    signIn({ username, password }).unwrap();
  };

  const handleSignOut = () => {
    signOut({}).unwrap();
  };

  useEffect(() => {
    console.log("!987!!Current authenticated user:", data);

    if (data) {
      console.log("!987!!Current authenticated user:", data);
    }
  }, [data]);
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
      <Text>skp "auth"</Text>
      {isSignInError && (
        <Snackbar visible={true} onDismiss={() => console.log("jjjj")}>
          {"Sign in failed"}
        </Snackbar>
      )}
    </>
  );
}
