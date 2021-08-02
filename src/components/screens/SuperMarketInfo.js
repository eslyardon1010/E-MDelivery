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
import { HeaderGeneral } from '../../shared/Header';
    
const infoSuperMarket = ({route, navigation}) => {
    const { informacion } = route.params;
    
    if (informacion == 'Lacteos') {
        return (
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                    <InfoSuperLacteos type={informacion} navigation={navigation}/>
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Carnes") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperCarnes type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Frutas") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperFrutas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mariscos") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperMariscos type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
     
        );
    }else if (informacion == "Alcoholicas") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperAlcoholicas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Sodas") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperBebidas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Snacks") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperSnacks type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Cuidado Personal") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperCuidado type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Limpieza") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperLimpieza type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Mascotas") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperMascotas type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }
    else if (informacion == "Abarrotes") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperAbarrotes type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Panaderia") {
        return(
            <View>
                <HeaderGeneral/>
            <ScrollView>
                   <InfoSuperPanaderia type={informacion} navigation={navigation}/>  
          </ScrollView>
          </View>
        );
    }
}


export default infoSuperMarket