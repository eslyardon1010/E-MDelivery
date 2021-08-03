import React, { useState, useEffect } from 'react'
import {ListItem, Button} from 'react-native-elements'
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { firebase } from '../../firebase/index'
import theme from '../../theme';
import { DevSettings } from 'react-native';
import * as Updates from 'expo-updates';
import { TouchableOpacity } from 'react-native';

const TusOrdenes = ({location}) => {


    
    
     const user = firebase.auth().currentUser;
     const [ordenes, setOrdenes] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Orders").where("user", "==", user.uid)
    .get()
             .then((querySnapshot) => {
        const ordenes = [];
        querySnapshot.forEach((doc) => {
                const { name,total, state, price, costoenvio } = doc.data()
                ordenes.push(
                    {
                        id: doc.id,
                        name,
                        state,
                        total,
                        price,
                        costoenvio
                    }
            )
        })
                 
            setOrdenes(ordenes)
        });
      
    }, []);

    return (
        <ScrollView
     
      >
  
            {
                ordenes.map((ordenes) => {
                   const param ={
                 state: 'Entregado'
                    }

                    /*METODO PARA BORRAR */
                    const borrar ={
                 id: `${ordenes.id}`
                    }
                    /*LA CONSULTA A LA BASE DE DATOS */
                    const ref = firebase.firestore().collection('Orders').doc(`${ordenes.id}`);
                    

                    return (
                    
                    <ListItem.Swipeable
                        key={ordenes.id}
                    
                       rightContent={
                         <Button
                           title="Entregado"
                          onPress={() => {
                                (ref.update(param), alert('GRACIAS POR SU COMPRA')) }}
                           buttonStyle={{ minHeight: '100%', backgroundColor: theme.colors.redDark }}
                           />
                           
                        }
                         leftContent={
                         <Button
                           title="Eliminar"
                          onPress={() => {
                                (ref.delete(borrar), alert('La compra a sido eliminada'))}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: theme.colors.redLight }}
                           />
                           
                       }
                        >
                            
                        
                    <ListItem.Chevron />
                    <ListItem.Content>
                            <ListItem.Title>{ordenes.name}</ListItem.Title>
                             <ListItem.Subtitle>Estado: {ordenes.state}</ListItem.Subtitle>
                            <ListItem.Subtitle style={styles.price}>Price: L {ordenes.price}</ListItem.Subtitle>
                            <ListItem.Subtitle style={styles.costo}>Costo Envio: L{ordenes.costoenvio}</ListItem.Subtitle>
                             <ListItem.Subtitle style={styles.total}>Total: L {ordenes.total}</ListItem.Subtitle>
                    </ListItem.Content>
            </ListItem.Swipeable>
                )
            
               })
            }
            
      </ScrollView>
        
    )


}

const styles = StyleSheet.create({
    price: {
      alignSelf: 'center', 
        top: 20,
      marginLeft: 20
    }, 
    total: {
        top: -18,
        alignSelf: 'flex-end',
        color: theme.colors.redDark,
           fontWeight: 'bold'
    },
    costo: {
        
    }

})


export default TusOrdenes