import {Tabs} from "expo-router";
import React from "react";

const LoginLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {display: "none"},
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
