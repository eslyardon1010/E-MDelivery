import React, { useState, useContext } from "react";
import { StyleSheet, View,Image } from "react-native";
import { Button, Caption, Text, TextInput,  } from "react-native-paper";
import theme from "../../theme";
import { Context as AuthContext } from "../../providers/AuthContext";

function SigninForm(navigation) {
    const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

   function handleVerify(input) {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "signin") {
      if (email && password && !emailError && !passwordError) {
        signin(email, password);
      }
    }
  }

  return (
  <View>
  {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
    <Text style={styles.txt}>LOGIN</Text>
    <View>
     
      <Image
 style={styles.usuario}
 source={require('../../img/user.png')}
/>
  
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
        
      style={styles.input}
      />
      {emailError && (
        <Caption style={styles.caption}>Por favor ingresa tu cuenta de correo electrónico</Caption>
      )}
      <TextInput
      style={styles.input}
        mode="outlined"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}
      />
      {passwordError && <Caption style={styles.caption}>Por favor ingresa tu contraseña</Caption>}
      <Button
       mode="contained" 
       style={styles.button} 
       onPress={() => handleVerify("signin")}
       >
        Signin
      </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.red,
    position: "relative",
    marginTop: 170, 
    borderRadius: 60
  },
  input: {
    top: 140, 
    marginTop: 20
  },
  usuario: {
     width: 120,
     height:120, 
     alignSelf:"center", 
     top: 80
  },
  txt: {
    color: theme.colors.white,
    fontStyle: "italic", 
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",

  }, 
  caption: {
    color: theme.colors.white
  }
});

export default SigninForm;