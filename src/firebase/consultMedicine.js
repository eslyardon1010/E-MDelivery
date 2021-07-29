import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-paper";
import {ListItem} from 'react-native-elements'


export const InfoMedicineAlimentario = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "A")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price,
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineSangre = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "B")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price,
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineCardiovascular = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "C")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoMedicineDermatologico = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "D")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineUrinario = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "E")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineHormonales = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "H")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineAntiinfecciosos = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "J")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoMedicineHuesos = ({type}) => {

    const [medicament, setMedicines] = useState([])
    useEffect(() => {
         firebase.firestore().collection("Medicine").where("type", "==", "M")
    .get()
             .then((querySnapshot) => {
        const medicament = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                medicament.push(
                    {
                        id: doc.id,
                        name,
                        description,
                        time, 
                        price
                    }
            )
             console.log(doc.id, " => ", doc.data());
            })
            setMedicines(medicament)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                medicament.map((medic) => {
                    return (
                        <ListItem
                            key={medic.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{medic.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}