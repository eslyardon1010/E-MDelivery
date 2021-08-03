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
  const [perfil, setPerfil] = useState([])
    useEffect(() => {
         firebase.firestore().collection("users").where("id", "==",user.uid)
    .get()
             .then((querySnapshot) => {
        const perfil = [];
        querySnapshot.forEach((doc) => {
                const { fullname, email} = doc.data()
                perfil.push(
                    {
                        id: doc.id,
                        fullname,
                        email
                    }
            )
            })
            setPerfil(perfil)
        });
      
    }, []);

  return (
    <View style={styles.container} >
      <Image
        style={styles.usuario}
        source={require('../../img/user.png')}
      />
      {
        perfil.map((usuario) => {

          return (
            <View>
            <Text style={styles.txt}>Nombre: {usuario.fullname}</Text>
              <Text style={styles.txt}>Email: {usuario.email}</Text>
              </View>
          )
        })}

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

  txt: {
    color: theme.colors.white,
    textAlign: "center",
    fontSize: 18,
    marginTop: 30, 
    top:-20
  },
  input: {
    color: theme.colors.red,
    top: 110
  },
  usuario: {
    width: 120,
    height: 120,
    alignSelf: "center",
    top: -70
  },
  signout: {
    top: 70,
    backgroundColor: theme.colors.white,
    borderRadius: 80,
    color: theme.colors.black
  },

});

export default AboutInformation;