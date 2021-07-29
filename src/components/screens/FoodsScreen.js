import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import theme from "../../theme";
import SearchBar from "../../shared/SearchThings";

const DATA = [
  {
        title: "Pizza",
        imgUrl: "https://i.ibb.co/S3tqWBc/Pizza-Food.jpg" 
    },
  {
      title: "Chicken",
      imgUrl: "https://i.ibb.co/y8DVz1Y/Chicken-Food.jpg"
  },
  {
      title: "Pasta",
      imgUrl: "https://i.ibb.co/D8pJf3F/Pasta-Food.jpg"
    },
   {
       title: "Salad",
       imgUrl: "https://i.ibb.co/WHz5vv2/Salad-Food.jpg"
  },
  {
      title: "Fast Food",
      imgUrl: "https://i.ibb.co/b31P00x/FastFood.jpg"
  },
  {
      title: "Gourmet",
      imgUrl: "https://i.ibb.co/wSx4kz0/Gourmet-Food.jpg"
    },
  {
      title: "Mexican",
      imgUrl: "https://i.ibb.co/gw1ZFtV/Mexican-Food.jpg"
  },
  {
      title: "Chinese",
      imgUrl: "https://i.ibb.co/pyLrPhf/Chinese-Food.jpg"
  },
];


const FoodScreen = ({navigation}) => {

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
                    <TouchableOpacity onPress={()=>{navigation.navigate("ComidaInformacion")}}>

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

export default FoodScreen;