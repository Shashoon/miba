import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { PrimaryIconButton } from "@/components/";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <PrimaryIconButton iconName="chevron-back" size={20} />
      </View>

      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={48}
          source={require("@/assets/images/profile.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius: 50,
  },
  avatarContainer: {},
});

export default Header;
