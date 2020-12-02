import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButon from "../components/AppButton";
import Screen from "../components/Screen";
import { setEnabled } from "react-native/Libraries/Performance/Systrace";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      ></AppTextInput>
      <AppButon
        title="Login"
        onPress={() => console.log(email, password)}
      ></AppButon>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
