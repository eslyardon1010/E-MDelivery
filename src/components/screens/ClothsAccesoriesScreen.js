import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import theme from "../../theme";

const DATA = [
      {  title: "Maquillaje",
      imgUrl: "https://i.ibb.co/HTcTRmv/makeup.jpg"
  },
  {
      title: "Perfumes",
      imgUrl: "https://i.ibb.co/1s7SKZy/perfumes.jpg"
  },
  {
        title: "Carteras",
        imgUrl: "https://i.ibb.co/R6WqjZm/arno-senoner-o-CXVxw-TFwq-E-unsplash.jpg" 
    },
  {
      title: "Jeans",
      imgUrl: "https://i.ibb.co/93Mth3D/jeans.jpg"
  },
  {
      title: "Blusas",
      imgUrl: "https://i.pinimg.com/originals/24/d2/40/24d240a8bfa812ac2672512c743dd331.jpg"
    },
   {
       title: "Formales",
       imgUrl: "https://i.ibb.co/HKqk90b/formal.jpg"
  },
  {
      title: "Zapatos",
      imgUrl: "https://i.ibb.co/wz0jMYS/tenis.jpg"
  },
  {
      title: "Accesorios",
      imgUrl: "https://i.ibb.co/bWSL0CH/accesorios.jpg"
    },
 

];


const ClothScreen = ({navigation}) => {

    return (
         <ScrollView>
      <View style={styles.container}>
              <View style={styles.containerflat}>
        <FlatList
              data={DATA}
              numColumns= '2'
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate("InformacionCloths", {informacion: item.title})}}>

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

export default ClothScreen;