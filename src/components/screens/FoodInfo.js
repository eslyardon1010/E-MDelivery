import React, {useEffect, useState} from 'react'
import { firebase } from '../../firebase/index'
import 'firebase/firestore';
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-paper";
import {ListItem} from 'react-native-elements'

const infoFood = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Pizza")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setFoods(foods)
        });
      
    }, []);
    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem
                            key={food.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
}


export default infoFood