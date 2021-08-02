import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView, StyleSheet} from 'react-native';
import {ListItem, Button} from 'react-native-elements'
import theme from '../theme/index'
import { Avatar } from 'react-native-paper';

export const InfoMedicineAlimentario = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "A")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                             <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineSangre = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "B")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineCardiovascular = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "C")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoMedicineDermatologico = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "D")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineUrinario = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "G")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineHormonales = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "H")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       } >
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineAntiinfecciosos = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "J")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineHuesos = ({type, navigation}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "M")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price, image } = doc.data()
                medicament.push(
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
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem.Swipeable
                        key={medic.id}
                       rightContent={
                         <Button
                           title="Comprar"
                           onPress={()=>{navigation.navigate("MedicinaOrden", {orden: medic.id})}}
                           buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                         />
                       }>
                            <ListItem.Chevron />
                            <Avatar.Image size={40} source={{ uri :`${medic.image}` }}/>
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                                <ListItem.Subtitle>{medic.time}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.price}>${medic.price}</ListItem.Subtitle>
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