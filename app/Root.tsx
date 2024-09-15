import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { Stack } from "expo-router";
import { Text } from "react-native-paper";
import "react-native-reanimated";
import { useDispatch } from "react-redux";

import { setUser } from "@/src/redux/features/userSlice";
import { ReduxProvider } from "@/src/redux/provider";
import { useAppSelector } from "@/src/redux/store";

export default function Root() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user); // Get the user data from Redux

  console.log("mountttttt root");
  useEffect(() => {
    const fetchUser = async () => {
      console.log("98777777777777777777777777777777777");
      try {
        // Attempt to fetch the current authenticated user
        const user = await Auth.currentAuthenticatedUser();
        console.log("User data:", user);

        // If successful, update Redux state with user information
        dispatch(setUser(user.username));
      } catch (error) {
        // Handle errors such as the user being unauthenticated
        console.log("Error:", error);
        dispatch(setUser(null));
      }
    };

    // Call the asynchronous function
    fetchUser();
  }, [user]); // Dependencies for the effect

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
