import React from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { Button, Text, FAB } from "react-native-paper";
//import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";

function Home({navigation}) {


  return (
    
    <View style={styles.container}>

      <FAB
        icon="cart"
        style={styles.fab} 
        onPress={() => navigation.navigate("TusOrdenes")}  
      />

        <FAB
        icon={{ uri: 'https://image.flaticon.com/icons/png/512/1946/1946429.png' }}
        style={styles.fab2} 
        onPress={() => navigation.navigate("InformacionUsuario")}  
      />
    
       <TouchableOpacity onPress={() => {navigation.navigate("Comida")}} style={styles.button}> 
            <Text style={styles.Text}>COMIDA</Text>
            <Image
               style={styles.img}
      source={require('../../../src/img/iconos/fast-food.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Medicina")}} style={styles.button}> 
            <Text style={styles.Text}>MEDICINA</Text>
            <Image
               style={styles.img}
      source={require('../../../src/img/iconos/medicine.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Ropa-Accesorios")}} style={styles.button}> 
            <Text style={styles.Text}>ROPA & ACCESORIOS</Text>
            <Image
               style={styles.img}
      source={require('../../../src/img/iconos/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Supermercado")}} style={styles.button}> 
            <Text style={styles.Text}>SUPER MERCADO</Text>
            <Image
               style={styles.img}
      source={require('../../../src/img/iconos/grocery-cart.png')} />
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
button: {
  marginBottom: 30,
  backgroundColor: theme.colors.red,
  position: "relative",
  borderRadius: 60,
  top: -20, 
  height: 70,
  marginTop: 5
},
Text: {
    color: theme.colors.white, 
    textAlign: "center", 
    marginTop: 20, 
    fontWeight: "bold",
}, 
img:{
 width: 40, 
 height:40, 
 marginTop: -35, 
 marginLeft: 50
  },

    fab: {
    backgroundColor: theme.colors.redDark,
    position: "absolute",
    right: 0,
    bottom: 10,
    margin: 20,
  },
      fab2: {
    backgroundColor: theme.colors.redDark,
    position: "absolute",
    left: 0,
    bottom: 10,
    margin: 20,
  },

});

export default Home;