import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";
import auth from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 16,
    margin: 20,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#808080",
    width: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffff",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: "#ffff",
  },
});

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("succesfully logged in");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <ImageBackground
      source={require("./assets/login-bg-img.jpg")}
      style={styles.containerImg}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
