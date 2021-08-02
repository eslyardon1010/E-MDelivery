import React, { useState, Component } from "react";
import { ScrollView } from "react-native";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import theme from "../../theme";
import SearchBar from "../../shared/SearchThings";
import { HeaderGeneral } from "../../shared/Header";

const DATA = [
  {  title: "Alimentario y Metabolismo",
      imgUrl: "https://i.ibb.co/HTcTRmv/makeup.jpg"
  },
  {
      title: "Sangre y órganos",
      imgUrl: "https://i.ibb.co/34XRfx5/sangre.jpg"
  },
  {
        title: "Sistema cardiovascular",
        imgUrl: "https://i.ibb.co/R67qJj9/cardiovasculas.png" 
    },
  {
      title: "Medicamentos dermatológicos ",
      imgUrl: "https://i.ibb.co/k3pKF98/dermatologico.jpg"
  },
  {
      title: "Medicamentos genitourinario",
      imgUrl: "https://i.ibb.co/5nt20rk/urinarias.jpg"
    },
   {
       title: "Medicamentos hormonales ",
       imgUrl: "https://i.ibb.co/tPgZ76v/hormonales.jpg"
  },
  {
      title: "Medicamentos Antiinfecciosos",
      imgUrl: "https://i.ibb.co/zPq12Pp/main-producto-7.jpg"
  },
  {
      title: "Medicamentos Huesos",
      imgUrl: "https://i.ibb.co/SJ3tKWF/huesos.jpg"
    },
 

];


const ClothScreen = ({navigation}, props) => {

    return (
         <ScrollView>
      <View style={styles.container}>
      <HeaderGeneral/>
              <View style={styles.containerflat}>
        <FlatList
              data={DATA}
              numColumns= '2'
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity onPress={()=>{navigation.navigate("InformacionMedicina", {informacion: item.title})}}>

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