import * as React from "react";
import { Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import PrimaryContainer from "@/components/containers/PrimaryContainer";
import customTheme from "@/assets/theme";
import { PrimaryChip, PrimaryIconButton } from "@/components";

function HomeScreen() {
  const { colors } = useTheme(customTheme);

  return (
    <View style={styles.screenContainer}>
      <PrimaryContainer
        bgColor={colors.white as string}
        // bgColor="transparent"
        style={styles.container}
      >
        <View style={styles.content}>
          <Text variant="titleLarge">Hello User</Text>
          <Text variant="labelSmall">
            Lorem ipsum dolor sit consectetur. Ratione, odit!
          </Text>
        </View>

        <Text style={styles.emoji}>👋</Text>
      </PrimaryContainer>

      {/* Icons container */}
      <View style={styles.iconsContainer}>
        <PrimaryIconButton
          iconName="document-text-outline"
          size={26}
          style={styles.iconButton}
        />
        <PrimaryIconButton
          iconName="chatbox-outline"
          size={26}
          style={styles.iconButton}
        />
        <PrimaryIconButton
          iconName="trophy-outline"
          size={26}
          style={styles.iconButton}
        />
        <PrimaryIconButton
          iconName="flash-outline"
          size={26}
          style={styles.iconButton}
        />
        <PrimaryIconButton
          iconName="earth-outline"
          size={26}
          style={styles.iconButton}
        />
      </View>

      <View style={styles.dataContainer}>
        <PrimaryContainer
          bgColor={colors.darkPrimary as string}
          style={styles.ratingContainer}
        >
          <Text variant="titleSmall">Your Rating</Text>
          <Text variant="titleLarge">
            {(Math.random() * (5 - 1) + 1).toFixed(1)}
          </Text>
          <Text variant="titleLarge">💪</Text>
        </PrimaryContainer>

        <View style={{ gap: 10, width: "50%" }}>
          <PrimaryContainer bgColor={colors.lightPrimary as string}>
            <Text variant="titleMedium">Total Jobs</Text>
            <Text variant="bodyLarge">26</Text>
          </PrimaryContainer>

          <PrimaryContainer bgColor={colors.yellow as string}>
            <Text variant="titleMedium">Last Job</Text>
            <Text variant="bodyLarge" numberOfLines={2} ellipsizeMode="tail">
              Garden cleaningg
            </Text>
          </PrimaryContainer>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <PrimaryChip icon="flash">
          <Text variant="labelSmall">Upgrade now to boost your profile</Text>
        </PrimaryChip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 10,
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
  emoji: {
    fontSize: 80,
  },
  iconsContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  iconButton: {
    backgroundColor: customTheme.colors.white,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  ratingContainer: {
    justifyContent: "center",
    height: "100%",
    width: "50%",
    gap: 10,
  },
});

export default HomeScreen;
