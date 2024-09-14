import { useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useCurrentAuthenticatedUserQuery } from "@/src/redux/features/authApi";
import { ReduxProvider } from "@/src/redux/provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import awsconfig from "../src/aws-exports";

export default function Root() {
  const colorScheme = useColorScheme();
  const { data, error, isLoading } = useCurrentAuthenticatedUserQuery();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    console.log("Current authenticated user:", data);

    if (data) {
      console.log("Current authenticated user:", data);
    }
  }, [data]);
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
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
    </ThemeProvider>
  );
}
