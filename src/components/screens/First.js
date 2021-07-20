import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";

function First({ navigation }) {
    return(
<View style={styles.container}>
    <Text style={styles.Tittle}>WELCOME TO E&M DELIVERY</Text>
    <Image
 style={styles.usuario}
 source={require('../../img/em.jpg')}
/>
<TouchableOpacity onPress={() => {navigation.navigate("Signin")}} style={styles.button}> 
            <Text style={styles.Text}>SIGNIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("Signup")}} style={styles.button}> 
            <Text style={styles.Text}>SIGNUP</Text>
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
    usuario: {
        width: 150,
        height:150, 
        alignSelf:"center", 
        top: 60
     },
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: theme.colors.red,
        position: "relative",
        borderRadius: 60,
        top: 120, 
        height: 40
      },
      Text: {
          color: theme.colors.white, 
          textAlign: "center", 
          marginTop: 10, 
          fontWeight: "bold",
      }, 
      Tittle: {
        color: theme.colors.white, 
        textAlign: "center",
        fontWeight: "bold",
        marginTop: -100, 
        fontSize: 18
      }
  });
  

export default First
