import React from 'react'

import { ScrollView, View, Text } from 'react-native';
import {
    InfoSuperAbarrotes,
    InfoSuperAlcoholicas,
    InfoSuperBebidas,
    InfoSuperCarnes,
    InfoSuperCuidado,
    InfoSuperFrutas,
    InfoSuperLacteos,
    InfoSuperLimpieza,
    InfoSuperMariscos,
    InfoSuperMascotas,
    InfoSuperPanaderia,
    InfoSuperSnacks
} from '../../firebase/ConsultsSuperMarket';
    
const infoSuperMarket = ({route, navigation}) => {
    const { informacion } = route.params;
    
    if (informacion == 'Lacteos') {
        return (
            <View>
            <ScrollView>
                    <InfoSuperLacteos type={informacion} navigation={navigation}/>
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Carnes") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperCarnes type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Frutas") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperFrutas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mariscos") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperMariscos type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
     
        );
    }else if (informacion == "Alcoholicas") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperAlcoholicas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Sodas") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperBebidas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Snacks") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperSnacks type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Cuidado Personal") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperCuidado type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Limpieza") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperLimpieza type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mascotas") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperMascotas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }
    else if (informacion == "Abarrotes") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperAbarrotes type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Panaderia") {
        return(
            <View>
            <ScrollView>
                   <InfoSuperPanaderia type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }
}


export default infoSuperMarket