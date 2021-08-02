import React from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { Button, Text } from "react-native-paper";
//import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme";
import SearchBar from "../../shared/SearchThings";
import {HeaderHome} from '../../shared/Header'
function Home({navigation}) {


  return (
    
    <View style={styles.container}>

      <HeaderHome navigation = {navigation}/>

       <SearchBar navigation = {navigation}/>
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


});

export default Home;