import React, { useContext, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { validate } from "email-validator";
import theme from "../../theme";

function SignupForm() {
  const { state, signup } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState(false);

  function handleVerify(input) {
    if (input === "fullname") {
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (password !== confirmPassword) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    } else if (input === "signup") {
      if (
        fullname &&
        email &&
        password &&
        confirmPassword &&
        !fullnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
      ) {
        try {
          signup(fullname, email, password);
        } catch (error) {
          console.log(error);
        }
      } else setError("All fields are required!");
    }
  }

  return (
    <View>
      <Text style={styles.title}>Sign Up</Text>
          <Image
 style={styles.usuario}
 source={require('../../img/register.png')}
/>
      {error && <Text>{error}</Text>}
      {state.errorMessage && <Text>{state.errorMessage}</Text>}
      <TextInput
       style={styles.input}
        mode="outlined"
        label="Fullname"
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => handleVerify("fullname")}
      />
      {fullnameError && <Caption style={styles.Caption}>Please enter your name</Caption>}
      <TextInput
       style={styles.input}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => handleVerify("email")}
      />
      {emailError && <Caption style={styles.Caption}>Please enter your email address</Caption>}
      <TextInput
       style={styles.input}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("password")}
      />
      {passwordError && (
        <Caption style={styles.Caption}>Please enter a valid password. Min 6 characters</Caption>
      )}
      <TextInput
       style={styles.input}
        mode="outlined"
        label="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("confirmPassword")}
      />
      {confirmPasswordError && (
        <Caption  style={styles.Caption} >Please enter your password confirmation</Caption>
      )}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handleVerify("signup")}
      >
        Create account
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.red,
    position: "relative",
    borderRadius: 60,
    top: 120
  },
  usuario: {
    width: 120,
    height:120, 
    alignSelf:"center",
    top: 70
 },
 input: {
   top: 100, 
   marginTop: 5
 }, 
 title: {
  fontSize: 24,
  fontStyle:"italic", 
  fontWeight: "bold", 
  textAlign: "center", 
  color: theme.colors.white,
  marginTop: -50
},
 Caption: {
   color: theme.colors.white
 }
});

export default SignupForm;