import {AuthService} from "@/services/authService";
import {CognitoUser} from "amazon-cognito-identity-js";
import {useRouter} from "expo-router";
import React, {useState} from "react";
import {Alert, Pressable, StyleSheet, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";

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
        <TextInput
          label="Username"
          value={username}
          right={<TextInput.Icon icon="account" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"rgb(202, 196, 208)"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setUsername}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry
          right={<TextInput.Icon icon="key" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"rgb(202, 196, 208)"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setPassword}
        />
        <TextInput
          label="Email"
          value={email}
          right={<TextInput.Icon icon="email" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"rgb(202, 196, 208)"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setEmail}
        />
        <TextInput
          label="Phone Number"
          value={phoneNumber}
          right={<TextInput.Icon icon="phone" color={"rgb(202, 196, 208)"} />}
          style={styles.primaryInput}
          textColor="#1a181b"
          placeholderTextColor={"red"}
          underlineStyle={styles.inputUnderline}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Button mode="contained-tonal" onPress={handleSignUp}>
        Sign Up
      </Button>

      <View style={styles.messageLabel}>
        <Text>Already have account ? </Text>
        <Pressable>
          <Text
            style={styles.clickableText}
            onPress={() => router.navigate("/(login)")}
          >
            Click here
          </Text>
        </Pressable>
      </View>

      {/* verification code input*/}
      {showVerification && (
        <View style={styles.verificationContainer}>
          <Text>We sent verification code to your mail.</Text>
          <TextInput
            label="Enter Code"
            value={verificationCode}
            right={
              <TextInput.Affix
                text="Send"
                onPress={handleVerification}
                textStyle={{color: "red"}}
              />
            }
            style={styles.primaryInput}
            textColor="#1a181b"
            placeholderTextColor={"red"}
            underlineStyle={styles.inputUnderline}
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
  messageLabel: {
    display: "flex",
    flexDirection: "row",
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
