import React, {useEffect, useState} from 'react'

import 'firebase/firestore';
import { ScrollView, View, Text } from 'react-native';
import { InfoFoodPizza, 
    InfoFoodChicken,
     InfoFoodSalad, 
     InfoFoodMexican,
      InfoFoodChinese, 
      InfoFoodFast,
       InfoFoodGourmet, 
       InfoFoodPasta } from '../../firebase/consults';
const infoFood = ({route, navigation}) => {
    const {informacion} = route.params;
    if (informacion == 'Pizza') {
        return (
            <View>
            <ScrollView>
                   <InfoFoodPizza food={informacion}/>  
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Chicken") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodChicken food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Pasta") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodPasta food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Salad") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodSalad food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Fast Food") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodFast food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Gourmet") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodGourmet food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mexican") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodMexican food={informacion}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Chinese") {
        return(
            <View>
            <ScrollView>
                   <InfoFoodChinese food={informacion}/>  
          </ScrollView>
          </View>
        );
    }
}


export default infoFood