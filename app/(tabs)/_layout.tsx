import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "@/components";
import { Icon, IconButton, PaperProvider } from "react-native-paper";
import customTheme from "@/assets/theme";

export default function TabLayout() {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#F55C3D",
            headerShown: true,
            header: () => <Header />,
            tabBarStyle: styles.navbarContainer,
            tabBarItemStyle: styles.navbarItem,
            tabBarIconStyle: styles.navbarItemImage,
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  color={color}
                  name={focused ? "home" : "home-outline"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Explore",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  color={color}
                  name={focused ? "search" : "search-outline"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="chats"
            options={{
              title: "Chats",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  color={color}
                  name={focused ? "chatbubble" : "chatbubble-outline"}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  color={color}
                  name={focused ? "person" : "person-outline"}
                />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    display: "flex",
    justifyContent: "center",
    borderRadius: 40,
    marginBottom: 0,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  navbarItem: {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarItemImage: {
    flex: 0,
    height: 30,
  },
});
