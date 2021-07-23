import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";

function AboutInformation(navigation) {
  const { signout } = useContext(AuthContext);
  
  return (
    <View style={styles.container} >
     <Title  style={styles.title}>Acount Information</Title>
     <Image
 style={styles.usuario}
 source={require('../../img/user.png')}
/>
    <Text  style={styles.txt}>Name: Juan Perez</Text>
    <Text  style={styles.txt}> Email: juanperez@gmail.com</Text>
  
    <TextInput
        mode="outlined"
        label="Ingrese una direccion"
        autoCapitalize="none"
      style={styles.input}
      />
     
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
    marginTop:-200,
    textAlign: "center"
  },
  txt: {
    color: theme.colors.white,
    textAlign: "center", 
    fontSize: 18, 
    marginTop: 60
  }, 
  input:{
    color: theme.colors.red, 
    top: 110
  }, 
  usuario: {
    width: 120,
    height:120, 
    alignSelf:"center", 
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