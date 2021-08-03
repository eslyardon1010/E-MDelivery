import React, {useEffect, useState} from 'react'
import { firebase } from './index';
import 'firebase/firestore';
import { ScrollView, StyleSheet } from 'react-native';
import {ListItem, Button} from 'react-native-elements'
import theme from '../theme/index'
import { Avatar } from 'react-native-paper';
import { set } from 'react-native-reanimated';

export const InfoMaquillaje = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "maquillaje")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}

export const InfoPerfumes = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "perfumes")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}


export const InfoCarteras = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "carteras")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}



export const InfoJeans = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "pantalones")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}


export const InfoBlusas = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "blusas")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}


export const InfoFormales = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "formales")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}







export const InfoZapatos = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "zapatos")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}




export const InfoAccesorios = ({type, navigation}) => {

    const [screenCA, setScreenCA] = useState([])
    useEffect(() => {
         firebase.firestore().collection("ClothesAndAccesories").where("type", "==", "accesorios")
    .get()
             .then((querySnapshot) => {
        const screenCA = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                screenCA.push(
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
            setScreenCA(screenCA)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                screenCA.map((screen) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={screen.id}
                       rightContent={
                         <Button
                           title="Mostrar"
                           onPress={()=>{navigation.navigate("OrdenCloths", {orden: screen.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${screen.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{screen.name}</ListItem.Title>
                                <ListItem.Subtitle>{screen.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> L {screen.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
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