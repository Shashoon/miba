import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useCurrentAuthenticatedUserQuery } from "@/src/redux/features/authApi";
import { ReduxProvider } from "@/src/redux/provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function Root() {
  const colorScheme = useColorScheme();
  const { data, error, isLoading } = useCurrentAuthenticatedUserQuery();

  useEffect(() => {
    console.log("!444444987!!Current authenticated user:", data);

    if (data) {
      console.log("!4444444444987!!Current authenticated user:", data);
    }
  }, [data]);
  console.log("22222222222");
  return (
    <ReduxProvider>
      <Stack>
        {data ? (
          // User is authenticated
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }} />
            {/* Add other authenticated screens */}
          </>
        ) : (
          // User is not authenticated
          <>
            <Stack.Screen name="SignIn" options={{ headerShown: false }} />
            {/* Add other unauthenticated screens */}
          </>
        )}
      </Stack>
    </ReduxProvider>
  );
}
