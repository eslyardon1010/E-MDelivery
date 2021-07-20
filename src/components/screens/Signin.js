import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <SigninForm />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.txt}>
          Don't have an account? <Text style={styles.signup}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.black,
  },
  forgotPassword: {
    textAlign: "auto",
    color: theme.colors.white
  },
  signup: {
    color: theme.colors.red,
  },
  txt: {
      color: theme.colors.white
  }
});

export default Signin;