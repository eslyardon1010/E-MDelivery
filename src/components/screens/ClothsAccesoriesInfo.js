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
       
const infoCloths = ({route, navigation}) => {

      const {informacion} = route.params;
    
    if (informacion == 'Maquillaje') {
        return (
            <View style={styles.container}>
                 
            <ScrollView>
                <InfoMaquillaje type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Perfumes") {
        return(
            <View>
            <ScrollView>
                     <InfoPerfumes type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
        );
    }else if (informacion == "Carteras") {
        return(
            <View>
            <ScrollView>
                     <InfoCarteras type={informacion} navigation={navigation}  />              

          </ScrollView>
          </View>
        );
    }else if (informacion == "Jeans") {
        return(
            <View>
            <ScrollView>
                   <InfoJeans type={informacion} navigation={navigation}  />              
          </ScrollView>
          </View>
        );
    }else if (informacion == "Blusas") {
        return(
            <View>
            <ScrollView>
                   <InfoBlusas type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Formales") {
        return(
            <View>
            <ScrollView>
                   <InfoFormales type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Zapatos") {
        return(
            <View>
            <ScrollView>
                   <InfoZapatos type={informacion} navigation={ navigation } />  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Accesorios") {
        return(
            <View>
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