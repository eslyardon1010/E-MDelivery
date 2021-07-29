import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-paper";
import {ListItem} from 'react-native-elements'


export const InfoFoodPizza = ({food}) => {

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


export const InfoFoodChicken = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Chicken")
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


export const InfoFoodPasta = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Pasta")
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


export const InfoFoodSalad = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Salad")
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



export const InfoFoodFast = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Fast Food")
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



export const InfoFoodGourmet = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Gourmet")
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



export const InfoFoodMexican = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Mexican")
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



export const InfoFoodChinese = ({food}) => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Food").where("type", "==", "Chinese Food")
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
