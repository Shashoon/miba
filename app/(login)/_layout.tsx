import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";

const LoginLayout = () => {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 24,
        },
        headerStyle: {},
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Welcome Back",
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "Join Us",
        }}
      />
    </Tabs>
  );
};

export default LoginLayout;
