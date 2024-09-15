import { useEffect } from "react";
import { Stack } from "expo-router";
import { Text } from "react-native-paper";
import "react-native-reanimated";
import { useDispatch } from "react-redux";

import { useCurrentAuthenticatedUserQuery } from "@/src/redux/features/authApi";
import { clearUser, setUser } from "@/src/redux/features/userSlice";
import { ReduxProvider } from "@/src/redux/provider";

export default function Root() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useCurrentAuthenticatedUserQuery();
  console.log("mountttttt root");
  useEffect(() => {
    console.log("2-2-22-2222222222!Current authenticated user:", data);

    if (data) {
      console.log("7-7-7-7-", data);
      dispatch(setUser(data.username));
    } else if (error) {
      console.log("ererere", error);
      // If there is an error, it likely means the user is not authenticated
      dispatch(clearUser()); // Clear user data from Redux state
    }
  }); // Add dispatch and error as dependencies

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
