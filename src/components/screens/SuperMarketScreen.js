import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import theme from "../../theme";
import SearchBar from "../../shared/SearchThings";

const DATA = [
      {  title: "Lacteos",
      imgUrl: "https://i.ibb.co/Wt17Jd0/Lacteos.webp"
  },
  {
      title: "Carnes",
      imgUrl: "https://i.ibb.co/XkNMjjT/carnes.jpg"
  },
  {
        title: "Frutas",
        imgUrl: "https://i.ibb.co/FsBHPSX/fruta.jpg" 
    },
  {
      title: "Mariscos",
      imgUrl: "https://i.ibb.co/bbcDHF8/mariscos.jpg"
  },
  {
      title: "Alcoholicas",
      imgUrl: "https://i.ibb.co/NKwPDCN/alcohol.jpg"
    },
   {
       title: "Sodas",
       imgUrl: "https://i.ibb.co/KGSx9W1/sodas.jpg"
  },
  {
      title: "Snacks",
      imgUrl: "https://i.ibb.co/Zf0jf7n/snacks.jpg"
  },
  {
      title: "Cuidado Personal",
      imgUrl: "https://i.ibb.co/bWSL0CH/accesorios.jpg"
    },
  {
      title: "Limpieza",
      imgUrl: "https://i.ibb.co/8dmJSFv/limpieza.jpg"
  },
  {
      title: "Mascotas",
      imgUrl: "https://i.ibb.co/T1m9DYq/mascotas.jpg"
    },
      {
      title: "Abarrotes",
      imgUrl: "https://i.ibb.co/dbffKt4/abarrotes.jpg"
  },
  {
      title: "Panaderia",
      imgUrl: "https://i.ibb.co/mJFk5sP/panaderia.jpg"
    },


];


const MarketScreen = ({navigation}) => {

    return (
         <ScrollView>
      <View style={styles.container}>
       
              <SearchBar navigation={navigation} />
              <View style={styles.containerflat}>
        <FlatList
              data={DATA}
              numColumns= '2'
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate("SupermercadoInfo", {informacion: item.title})}}>

                        <View>
                        <Text  style={styles.title}>{item.title}</Text>
                        </View>
                        <Image
                            source={{ uri: item.imgUrl }}
                            style= {styles.img}
                        />
                    </TouchableOpacity>
                )
            }}
                  />
                  </View>
             
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.black,
  },
  title: {
      fontSize: 16,
      color: theme.colors.black,
      textAlign: "center",
      backgroundColor: theme.colors.red,
      margin: 14,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      width: 140
    },
    img: {
        width: 140,
        height: 110,
        margin: 14,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: -14
    },
    containerflat: {
       marginTop: 15 
    }
});

export default MarketScreen;