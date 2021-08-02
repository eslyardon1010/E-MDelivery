import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView, StyleSheet } from 'react-native';
import {ListItem, Button} from 'react-native-elements'
import theme from '../theme/index'
import { Avatar } from 'react-native-paper';

export const InfoSuperLacteos = ({type, navigation}) => {

    const [lacteos, setLacteos] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "lacteos")
    .get()
             .then((querySnapshot) => {
        const lacteos = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                lacteos.push(
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
            setLacteos(lacteos)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                lacteos.map((lacteo) => {
                    return (
                        
                        <ListItem.Swipeable
                        key={lacteo.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: lacteo.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${lacteo.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{lacteo.name}</ListItem.Title>
                                <ListItem.Subtitle>{lacteo.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {lacteo.price}</ListItem.Subtitle>    
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })
            }
      </ScrollView>
);
            
}


export const InfoSuperCarnes = ({type, navigation}) => {

    const [carnes, setCarnes] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "carnes")
    .get()
             .then((querySnapshot) => {
        const carnes = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                carnes.push(
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
            setCarnes(carnes)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                carnes.map((carne) => {
                    return (
                        <ListItem.Swipeable
                           key={carne.id}
                          rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("SuperOrden", {orden: carne.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${carne.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{carne.name}</ListItem.Title>
                                <ListItem.Subtitle>{carne.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {carne.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperFrutas = ({type, navigation}) => {

    const [frutas, setFrutas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "frutasVerduras")
    .get()
             .then((querySnapshot) => {
        const frutas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                frutas.push(
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
            setFrutas(frutas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                frutas.map((fruta) => {
                    return (
                        <ListItem.Swipeable
                        key={fruta.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: fruta.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${fruta.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{fruta.name}</ListItem.Title>
                                <ListItem.Subtitle>{fruta.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {fruta.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}




export const InfoSuperMariscos = ({type, navigation}) => {

    const [mariscos, setMariscos] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "mariscos")
    .get()
             .then((querySnapshot) => {
        const mariscos = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                mariscos.push(
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
            setMariscos(mariscos)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                mariscos.map((marisco) => {
                    return (
                        <ListItem.Swipeable
                        key={marisco.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: marisco.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${marisco.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{marisco.name}</ListItem.Title>
                                <ListItem.Subtitle>{marisco.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {marisco.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperAlcoholicas = ({type, navigation}) => {

    const [alcoholicas, setAlcoholicas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "alcoholicas")
    .get()
             .then((querySnapshot) => {
        const alcoholicas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                alcoholicas.push(
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
            setAlcoholicas(alcoholicas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                alcoholicas.map((alcoholica) => {
                    return (
                        <ListItem.Swipeable
                        key={alcoholica.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: alcoholica.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${alcoholica.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{alcoholica.name}</ListItem.Title>
                                <ListItem.Subtitle>{alcoholica.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {alcoholica.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperBebidas = ({type, navigation}) => {

    const [bebidas, setBebidas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "carnes")
    .get()
             .then((querySnapshot) => {
        const bebidas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image} = doc.data()
                bebidas.push(
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
            setBebidas(bebidas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                bebidas.map((bebida) => {
                    return (
                        <ListItem.Swipeable
                        key={bebida.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: bebida.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${bebida.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{bebida.name}</ListItem.Title>
                                <ListItem.Subtitle>{bebida.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {bebida.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperSnacks = ({type, navigation}) => {

    const [snacks, setSnack] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "snacks")
    .get()
             .then((querySnapshot) => {
        const snacks = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                snacks.push(
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
            setSnack(snacks)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                snacks.map((snack) => {
                    return (
                        <ListItem.Swipeable
                           key={snack.id}
                          rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("SuperOrden", {orden: snack.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${snack.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{snack.name}</ListItem.Title>
                                <ListItem.Subtitle>{snack.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {snack.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperCuidado = ({type, navigation}) => {

    const [cuidado, setCuidado] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "cuidadopersonal")
    .get()
             .then((querySnapshot) => {
        const cuidado = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image} = doc.data()
                cuidado.push(
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
            setCuidado(cuidado)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                cuidado.map((cuidados) => {
                    return (
                        <ListItem.Swipeable
                           key={cuidados.id}
                          rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("SuperOrden", {orden: cuidados.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${cuidados.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{cuidados.name}</ListItem.Title>
                                <ListItem.Subtitle>{cuidados.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {cuidados.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperLimpieza = ({type, navigation}) => {

    const [limpieza, setLimpieza] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "productos de limpieza")
    .get()
             .then((querySnapshot) => {
        const limpieza = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                limpieza.push(
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
            setLimpieza(limpieza)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                limpieza.map((limpieza) => {
                    return (
                        <ListItem.Swipeable
                           key={limpieza.id}
                          rightContent={
                            <Button
                              title="Comprar"
                              onPress={()=>{navigation.navigate("SuperOrden", {orden: limpieza.id})}}
                              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            />
                          }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${limpieza.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{limpieza.name}</ListItem.Title>
                                <ListItem.Subtitle>{limpieza.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {limpieza.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperMascotas = ({type, navigation}) => {

    const [mascotas, setMascotas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "mascotas")
    .get()
             .then((querySnapshot) => {
        const mascotas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                mascotas.push(
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
            setMascotas(mascotas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                mascotas.map((mascota) => {
                    return (
                        <ListItem.Swipeable
                        key={mascota.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: mascota.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${mascota.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{mascota.name}</ListItem.Title>
                                <ListItem.Subtitle>{mascota.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {mascota.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperAbarrotes = ({type, navigation}) => {

    const [abarrotes, setAbarrotes] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "abarrotes")
    .get()
             .then((querySnapshot) => {
        const abarrotes = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price,image } = doc.data()
                abarrotes.push(
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
            setAbarrotes(abarrotes)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                abarrotes.map((abarrotes) => {
                    return (
                        <ListItem.Swipeable
                        key={abarrotes.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: abarrotes.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${abarrotes.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{abarrotes.name}</ListItem.Title>
                                <ListItem.Subtitle>{abarrotes.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {abarrotes.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperPanaderia = ({type, navigation}) => {

    const [panaderia, setPanaderia] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "panaderia")
    .get()
             .then((querySnapshot) => {
        const panaderia = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                panaderia.push(
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
            setPanaderia(panaderia)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                panaderia.map((pan) => {
                    return (
                        <ListItem.Swipeable
                        key={pan.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("SuperOrden", {orden: pan.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }
                        >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${pan.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{pan.name}</ListItem.Title>
                                <ListItem.Subtitle>{pan.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}> $ {pan.price}</ListItem.Subtitle>
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