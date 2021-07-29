import React, {useEffect, useState} from 'react'
import { firebase } from '../firebase/index';
import 'firebase/firestore';
import { ScrollView } from 'react-native';
import {ListItem} from 'react-native-elements'


export const InfoSuperLacteos = ({type}) => {

    const [lacteos, setLacteos] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "lacteos")
    .get()
             .then((querySnapshot) => {
        const lacteos = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                lacteos.push(
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
            setLacteos(lacteos)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                lacteos.map((lacteo) => {
                    return (
                        <ListItem
                            key={lacteo.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{lacteo.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperCarnes = ({type}) => {

    const [carnes, setCarnes] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "carnes")
    .get()
             .then((querySnapshot) => {
        const carnes = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                carnes.push(
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
            setCarnes(carnes)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                carnes.map((carne) => {
                    return (
                        <ListItem
                            key={carne.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{carne.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperFrutas = ({type}) => {

    const [frutas, setFrutas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "frutasVerduras")
    .get()
             .then((querySnapshot) => {
        const frutas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                frutas.push(
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
            setFrutas(frutas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                frutas.map((fruta) => {
                    return (
                        <ListItem
                            key={fruta.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{fruta.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}




export const InfoSuperMariscos = ({type}) => {

    const [mariscos, setMariscos] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "mariscos")
    .get()
             .then((querySnapshot) => {
        const mariscos = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                mariscos.push(
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
            setMariscos(mariscos)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                mariscos.map((marisco) => {
                    return (
                        <ListItem
                            key={marisco.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{marisco.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperAlcoholicas = ({type}) => {

    const [alcoholicas, setAlcoholicas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "alcoholicas")
    .get()
             .then((querySnapshot) => {
        const alcoholicas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                alcoholicas.push(
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
            setAlcoholicas(alcoholicas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                alcoholicas.map((alcoholica) => {
                    return (
                        <ListItem
                            key={alcoholica.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{alcoholica.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperBebidas = ({type}) => {

    const [bebidas, setBebidas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "carnes")
    .get()
             .then((querySnapshot) => {
        const bebidas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                bebidas.push(
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
            setBebidas(bebidas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                bebidas.map((bebida) => {
                    return (
                        <ListItem
                            key={bebida.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{bebida.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperSnacks = ({type}) => {

    const [snacks, setSnack] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "snacks")
    .get()
             .then((querySnapshot) => {
        const snacks = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                snacks.push(
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
            setSnack(snacks)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                snacks.map((snack) => {
                    return (
                        <ListItem
                            key={snack.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{snack.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}


export const InfoSuperCuidado = ({type}) => {

    const [cuidado, setCuidado] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "cuidadopersonal")
    .get()
             .then((querySnapshot) => {
        const cuidado = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                cuidado.push(
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
            setCuidado(cuidado)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                cuidado.map((cuidados) => {
                    return (
                        <ListItem
                            key={cuidados.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{cuidados.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperLimpieza = ({type}) => {

    const [limpieza, setLimpieza] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "productos de limpieza")
    .get()
             .then((querySnapshot) => {
        const limpieza = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                limpieza.push(
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
            setLimpieza(limpieza)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                limpieza.map((limpieza) => {
                    return (
                        <ListItem
                            key={limpieza.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{limpieza.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperMascotas = ({type}) => {

    const [mascotas, setMascotas] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "mascotas")
    .get()
             .then((querySnapshot) => {
        const mascotas = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                mascotas.push(
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
            setMascotas(mascotas)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                mascotas.map((mascota) => {
                    return (
                        <ListItem
                            key={mascota.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{mascota.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperAbarrotes = ({type}) => {

    const [abarrotes, setAbarrotes] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "abarrotes")
    .get()
             .then((querySnapshot) => {
        const abarrotes = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                abarrotes.push(
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
            setAbarrotes(abarrotes)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                abarrotes.map((abarrotes) => {
                    return (
                        <ListItem
                            key={abarrotes.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{abarrotes.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}



export const InfoSuperPanaderia = ({type}) => {

    const [panaderia, setPanaderia] = useState([])
    useEffect(() => {
         firebase.firestore().collection("SuperMarket").where("type", "==", "panaderia")
    .get()
             .then((querySnapshot) => {
        const panaderia = [];
        querySnapshot.forEach((doc) => {
                const { name, description, time, price } = doc.data()
                panaderia.push(
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
            setPanaderia(panaderia)
        });
      
    }, []);


    return (
        <ScrollView>
            {
                panaderia.map((pan) => {
                    return (
                        <ListItem
                            key={pan.id}
                        >
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{pan.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
      </ScrollView>
);
            
}