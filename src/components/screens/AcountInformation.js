import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";
import "firebase/auth";
import { firebase } from '../../firebase/index'
import { render } from "react-dom";


function AboutInformation(navigation, email) {
  const { signout } = useContext(AuthContext);

  const user = firebase.auth().currentUser;
  if (user !== null) {
    const uid = user.uid;
    const email = user.email;
    const displayName = user.displayName;
    console.log(email);
    console.log(displayName);
    console.log(uid);


  
  }


  return (
    <View style={styles.container} >
      <Title style={styles.title}>Informacion de la cuenta</Title>
      <Image
        style={styles.usuario}
        source={require('../../img/user.png')}
      />
      <View>
      <Text style={styles.txt}>Correo electronico: {user.email}</Text>
      <Text style={styles.txt}></Text>
      </View>

      <Button style={styles.signout} onPress={signout}>Signout</Button>
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
  title: {
    fontSize: 30,
    paddingLeft: 10,
    color: theme.colors.white,
    marginTop: -200,
    textAlign: "center"
  },
  txt: {
    color: theme.colors.white,
    textAlign: "center",
    fontSize: 18,
    marginTop: 60
  },
  input: {
    color: theme.colors.red,
    top: 110
  },
  usuario: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 20
  },
  signout: {
    top: 130,
    backgroundColor: theme.colors.redLight,
    borderRadius: 80,
    color: theme.colors.black
  },

});

export default AboutInformation;