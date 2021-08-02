import React, {useEffect, useState} from 'react'
import 'firebase/firestore';
import theme from "../../theme";
import { ScrollView, View, StyleSheet } from 'react-native';
import { InfoFoodPizza, 
    InfoFoodChicken,
     InfoFoodSalad, 
     InfoFoodMexican,
      InfoFoodChinese, 
      InfoFoodFast,
       InfoFoodGourmet, 
       InfoFoodPasta } from '../../firebase/consults';
       import { HeaderGeneral } from '../../shared/Header';
const infoFood = ({route, navigation}) => {
    const {informacion} = route.params;
  
    if (informacion == 'Pizza') {
        return (
            <View style={styles.container}>
                  <HeaderGeneral/>
            <ScrollView>
                
                <InfoFoodPizza food={informacion} navigation={ navigation } />
                
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Chicken") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodChicken food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Pasta") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodPasta food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Salad") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                
                   <InfoFoodSalad food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Fast Food") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodFast food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Gourmet") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodGourmet food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mexican") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodMexican food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Chinese") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFoodChinese food={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "center",
       padding: 10,
       backgroundColor: theme.colors.black,
     },
     list: {
         backgroundColor: theme.colors.black
     }
    })
export default infoFood