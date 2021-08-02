import React, {useEffect, useState} from 'react'
import 'firebase/firestore';
import theme from "../../theme";
import { ScrollView, View, StyleSheet } from 'react-native';
import { InfoAccesorios, 
InfoBlusas, 
InfoCarteras, 
InfoFormales, 
    InfoJeans,
    InfoMaquillaje,
    InfoPerfumes,
    InfoZapatos
 } from '../../firebase/ConsultClothes';
import { HeaderGeneral } from '../../shared/Header';
       
const infoCloths = ({ route, navigation }) => {
    
    const {informacion} = route.params;
  
    if (informacion == 'Maquillaje') {
        return (
            <View style={styles.container}>
                  <HeaderGeneral/>
            <ScrollView>
                <InfoMaquillaje type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Perfumes") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                     <InfoPerfumes type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
        );
    }else if (informacion == "Carteras") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                     <InfoCarteras type={informacion} navigation={navigation}  />              

          </ScrollView>
          </View>
        );
    }else if (informacion == "Jeans") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoJeans type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
        );
    }else if (informacion == "Camisetas") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoBlusas type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Formales") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoFormales type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Zapatos") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoZapatos type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Accesorios") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoAccesorios type={informacion} navigation={ navigation } />  
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
export default infoCloths