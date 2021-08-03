import React, { useState, useEffect } from 'react'
import {ListItem, Button} from 'react-native-elements'
import { ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

export const AgregarOrden = ({ route }) => {

    const [orden, setOrden] = useState([])
    const getDetailbyId = async (id) => {
        const ref = firebase.firestore().collection('Food').doc(id)
        const doc = await ref.get();
        const {name, price, time, description, image} = doc.data();
        const orden = [];
        orden.push({
            id:doc.id,
            name,
            description,
            time,
            price, 
            image
        })
        setOrden(orden);
        }
          
          useEffect(() => {
      getDetailbyId(route.params.tomar)
          });
    
    return (
         <ScrollView>
            {
                orden.map((food) => {
                    return (
                        <ListItem
                            key={food.id}
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
        
    )


}