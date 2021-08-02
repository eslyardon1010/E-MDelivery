import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from "react-native-paper";
import theme from '../theme/index'
import {ListItem, Button} from 'react-native-elements'
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';


export const InfoFoodPizza = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Pizza")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            <View>
            {
                foods.map((food) => {
                    return (
                        <View>
                        <ListItem.Swipeable
                           key={food.id}
                          rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title style={styles.txt}>{food.name}</ListItem.Title>
                                <ListItem.Subtitle style={styles.txt}>{food.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {food.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                        </View>
                    );
                })}
                </View>
      </ScrollView>
);
            
}


export const InfoFoodChicken = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Chicken")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                            key={food.id}
                            rightContent={
                                <Button
                                  title="Comprar"
                              onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                />
                              }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoFoodPasta = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Pasta")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time,
                         image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                            key={food.id}
                            rightContent={
                                <Button
                                  title="Comprar"
                                  onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                />
                              }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoFoodSalad = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Salad")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                            key={food.id}
                            rightContent={
                                <Button
                                  title="Comprar"
                              onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                />
                              }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoFoodFast = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Fast food")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time,
                         image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                        rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                            key={food.id}
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoFoodGourmet = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Gourmet")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image} = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable

                            key={food.id}
                            rightContent={
                                <Button
             
                              onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                                  title="Comprar"
                                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                />
                              }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoFoodMexican = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Mexican")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                        rightContent={
                            <Button
                            
                            onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                              title="Comprar"
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                            key={food.id}
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoFoodChinese = ({food, navigation}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Chinese Food")
    .get()
             .then((querySnapshot) => {
        const foods = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, image } = doc.data()
                foods.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        image
                    }
            )
            })
            setFoods(foods)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                foods.map((food) => {
                    return (
                        <ListItem.Swipeable
                        rightContent={
                            <Button
                            
                            onPress={()=>{navigation.navigate("TuOrden", {orden: food.id})}}
                              title="Comprar"
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                            key={food.id}
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${food.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{food.name}</ListItem.Title>
                                <ListItem.Subtitle>{food.time}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



const styles = StyleSheet.create({

    price: {
        textAlign: "right", 
        alignSelf: 'flex-end',
        marginTop: -5
    },
      list: {
          backgroundColor: theme.colors.black
      }
})
