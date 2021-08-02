import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';


import { Appbar, Button } from 'react-native-paper';
import theme from '../theme';

export function HeaderHome({navigation}){
 
    return(
        <View style={styles.container}>
        <View style={styles.Info}>
            <TouchableOpacity onPress={() => { navigation.navigate("AcountInformation") }} style={styles.buttonInfo}> 
              <Image
                   style={styles.imgInfo}
        source={require('../img/user.png')} />
          </TouchableOpacity>

          <Image
                   style={styles.img}
        source={require('../img/logodelivery.png')} />
          
          <TouchableOpacity onPress={() => { navigation.navigate("TusOrdenes") }} style={styles.buttonOrden}> 
              <Image
                   style={styles.imgOrden}
        source={require('../img/iconos/shopping-cart.png')} />
          </TouchableOpacity>
        </View>
        </View>
    )

} 

export const HeaderGeneral = ({ navigation, route, options, back }) => {
    const _goBack = () => console.log('Went back');


    return (
      <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack}/>
        <Appbar.Content title="E&M Delivery" />
      </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 10,
      backgroundColor: theme.colors.black,
    },
    header: {
 backgroundColor: theme.colors.red
    },
    Info:{
        backgroundColor: theme.colors.red, 
        position: "relative",
        top: -34, 
        height: 65, 
        width: 400,
        marginLeft: -11
      }, 
      buttonInfo: {
        width: 45,
        height: 45,
        marginLeft: 10,
        top: 13,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        alignSelf: "flex-start"
      }, 
      imgInfo:{
      height: 35, 
      width: 35,
      },
      img:{
          marginTop: -62,
          alignSelf: 'center',
      }, 
      buttonOrden:{
        width: 45,
        height: 45,
      marginLeft:295,
        alignContent: 'flex-end',
        padding: 10,
        borderRadius: 100,
        marginTop: -74
      }, 
      imgOrden:{
        height: 35, 
        width: 35,
      }
})