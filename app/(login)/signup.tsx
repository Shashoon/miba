import PrimaryButton from "@/components/buttons/PrimaryButton";
import PrimaryChip from "@/components/buttons/PrimaryChip";
import PrimaryTextButton from "@/components/buttons/PrimaryTextButton";
import PrimaryInputText from "@/components/inputs/PrimaryInputText";
import PrimaryText from "@/components/texts/PrimaryText";
import { AuthService } from "@/services/authService";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const router = useRouter();
  const authService = new AuthService();

  const handleSignUp = () => {
    authService
      .SignUp(username, password, email, phoneNumber)
      .then((res: CognitoUser | undefined) => {
        if (res) setShowVerification(!showVerification);
      });
  };

  const handleVerification = () => {
    authService
      .checkVerificationCode(username, verificationCode)
      .then((res: CognitoUser) => {
        if (res) {
          Alert.alert("Success");
          router.navigate("/(tabs)");
        }
      });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.formContainer}>
        <PrimaryInputText
          label="Username"
          value={username}
          right={<TextInput.Icon icon="account" color={"#E6E8E6"} />}
          onChangeText={setUsername}
        />

        <PrimaryInputText
          label="Password"
          value={password}
          secureTextEntry
          right={<TextInput.Icon icon="key" color={"#E6E8E6"} />}
          onChangeText={setPassword}
        />
        <PrimaryInputText
          label="Email"
          value={email}
          right={<TextInput.Icon icon="email" color={"#E6E8E6"} />}
          onChangeText={setEmail}
        />
        <PrimaryInputText
          label="Phone Number"
          value={phoneNumber}
          right={<TextInput.Icon icon="phone" color={"#E6E8E6"} />}
          onChangeText={setPhoneNumber}
        />
      </View>

      <PrimaryButton onPress={handleSignUp}>Sign Up</PrimaryButton>

      <PrimaryChip icon="information">
        <Text>Already have an account ? </Text>
        <PrimaryTextButton onPress={() => router.navigate("/(login)/")}>
          <PrimaryText>Click here</PrimaryText>
        </PrimaryTextButton>
      </PrimaryChip>

      {/* verification code input*/}
      {showVerification && (
        <View style={styles.verificationContainer}>
          <Text>We sent verification code to your mail.</Text>
          <PrimaryInputText
            label="Enter Code"
            value={verificationCode}
            right={<TextInput.Affix text="Send" onPress={handleVerification} />}
            onChangeText={setVerificationCode}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  formContainer: {
    display: "flex",
    width: "80%",
    gap: 15,
  },
  primaryInput: {
    backgroundColor: "white",
    borderRadius: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    maxHeight: 60,
  },
  inputUnderline: {
    display: "none",
  },
  clickableText: {
    color: "rgb(142 130 172)",
  },
  verificationContainer: {
    display: "flex",
    width: "80%",
    gap: 10,
  },
});
