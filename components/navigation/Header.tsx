import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { PrimaryIconButton } from "@/components/";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <PrimaryIconButton
          iconName="chevron-back"
          size={20}
          onPress={() => router.back()}
        />
      </View>

      <View>
        <Avatar.Image
          size={48}
          source={require("@/assets/images/avataaars.png")}
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
});

export default Header;
