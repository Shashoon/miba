import * as React from "react";
import { Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import PrimaryContainer from "@/components/containers/PrimaryContainer";
import customTheme from "@/assets/theme";

function HomeScreen() {
  const { colors, fonts } = useTheme(customTheme);

  return (
    <View style={styles.screenContainer}>
      <PrimaryContainer
        bgColor={colors.white as string}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Hello{"\n"}User</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit consectetur. Ratione, odit!
          </Text>
        </View>

        <Text style={styles.emoji}>👋</Text>
      </PrimaryContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
  },
  title: {
    color: customTheme.colors.black,
    fontSize: 42,
    fontFamily: customTheme.fonts.medium.fontFamily,
    fontWeight: "900",
    letterSpacing: 3,
    lineHeight: 40,
  },
  emoji: {
    fontSize: 80,
  },
  subtitle: {
    color: customTheme.colors.gray,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
