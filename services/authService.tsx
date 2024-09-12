import {Auth} from "aws-amplify";
import {Alert} from "react-native";

export class AuthService {
  constructor() {}

  // SignUp function for AWS Amplify
  public async SignUp(
    username: string,
    password: string,
    email: string,
    phone_number: string
  ) {
    try {
      console.log("1-1-1", username, email);
      const {user} = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number, // optional - E.164 number convention
        },
        autoSignIn: {
          enabled: true,
        },
      });

      Alert.alert("Success", "User signed up successfully");
      return user;
    } catch (error) {
      console.log("Error signing up:", error);
      Alert.alert("Error", "Failed to sign up: " + error);
    }
  }

  // SignIn function for AWS Amplify
  public async SignIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      //   setUser(username); // Set the signed-in user
      Alert.alert("Success", `User ${username} signed in successfully`);

      return user;
    } catch (error) {
      console.log("Error signing in:", error);
      Alert.alert("Error", "Failed to sign in: " + error);
    }
  }

  // SignOut function for AWS Amplify
  public async SignOut(setUser: (username: string | null) => void) {
    try {
      await Auth.signOut();
      setUser(null); // Reset the user state on sign-out
      Alert.alert("Success", "User signed out successfully");
    } catch (error) {
      console.log("Error signing out:", error);
      Alert.alert("Error", "Failed to sign out: " + error);
    }
  }

  public async checkVerificationCode(username: string, code: string) {
    try {
      const res = await Auth.confirmSignUp(username, code);

      return res;
    } catch (error) {
      console.log("Error wrong code:", error);
      Alert.alert("Error", "Failed to verify code: " + error);
    }
  }

  public async GetCurrentUser() {}
}
