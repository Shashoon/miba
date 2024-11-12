import { PrimaryButton } from "@/components";
import { AuthService } from "@/services/authService";
import { RootState } from "@/services/store/store";
import { clearUser } from "@/services/store/userSlice";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const authService = new AuthService();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await authService.SignOut();

    dispatch(clearUser());
    router.navigate("/(login)/");
  };
  return (
    <View>
      <Text>{user?.email + " " + user?.name + user?.id} is signed in</Text>
      <PrimaryButton onPress={handleLogout}>Sign Out</PrimaryButton>
    </View>
  );
};

export default Profile;
