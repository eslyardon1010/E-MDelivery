import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { Title, Divider } from 'react-native-paper'
import {firebase} from '../../firebase/index'
import { HeaderGeneral } from '../../shared/Header'
import theme from '../../theme'

export const OrdenFood = ({route, navigation}) => {
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
      getDetailbyId(route.params.orden)
     
     const orden = [];
           
       
    });


    return (
        <View style={styles.container}>
        <ScrollView>
            <View>
            <HeaderGeneral/>
            {
            
                orden.map((orden) => {
                    return (
                        <View>
                             <Title style={styles.txt}>Nombre: {orden.name}</Title>
                             <Image style={styles.image}
                             source = {{ uri :`${orden.image}` }}
                             />
                             <Text style={styles.txt}>Descripcion</Text>
        
                             <Text style={styles.txt}>{orden.description}</Text>
                             <Text style={styles.txt}>Precio: ${orden.price}</Text>
                             <Text style={styles.txt}>Tiempo Estimado: {orden.time}</Text>
                             <TouchableOpacity onPress={() => {navigation.navigate("TusOrdenes")}} style={styles.button} >
                                 <Text style={styles.texto}>COMPRAR</Text>
                             </TouchableOpacity>

                        </View>
                 
                    );
                })}
                </View>
      </ScrollView>
      </View>
);
            
}




export const OrdenMedicine = ({route}) => {
    const [orden, setOrden] = useState([])
    const getDetailbyId = async (id) => {
        const ref = firebase.firestore().collection('Medicine').doc(id)
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
      getDetailbyId(route.params.orden)
     
     const orden = [];
           
       
    });


    return (
        <View style={styles.container}>
        <HeaderGeneral/>
        <ScrollView>
            <View>
            {
                orden.map((orden) => {
                    return (
                        <View>
                             <Title style={styles.txt}>Nombre: {orden.name}</Title>
                             <Image style={styles.image}
                             source = {{ uri :`${orden.image}` }}
                             />
                             <Text style={styles.txt}>Descripcion</Text>
                             <Text style={styles.txt}>{orden.description}</Text>
                             <Text style={styles.txt}>Precio: ${orden.price}</Text>
                             <Text style={styles.txt}>Tiempo Estimado: {orden.time}</Text>
                             <TouchableOpacity onPress={() => {navigation.navigate("TusOrdenes")}} style={styles.button} >
                                 <Text style={styles.texto}>COMPRAR</Text>
                             </TouchableOpacity>
                        </View>
                    );
                })}
                </View>
      </ScrollView>
      </View>
);
            
}


export const OrdenSuper = ({route}) => {
    const [orden, setOrden] = useState([])
    const getDetailbyId = async (id) => {
        const ref = firebase.firestore().collection('SuperMarket').doc(id)
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
      getDetailbyId(route.params.orden)
     
     const orden = [];
           
       
    });


    return (
        <View style={styles.container}>
        <HeaderGeneral/>
        <ScrollView>
            <View>
            {
                orden.map((orden) => {
                    return (
                        <View>
                             <Title style={styles.txt}>Nombre: {orden.name}</Title>
                             <Image style={styles.image}
                             source = {{ uri :`${orden.image}` }}
                             />
                             <Text style={styles.txt}>Descripcion</Text>
                             <Text style={styles.txt}>{orden.description}</Text>
                             <Text style={styles.txt}>Precio: ${orden.price}</Text>
                             <Text style={styles.txt}>Tiempo Estimado: {orden.time}</Text>
                             <TouchableOpacity onPress={() => {navigation.navigate("TusOrdenes")}} style={styles.button} >
                                 <Text style={styles.texto}>COMPRAR</Text>
                             </TouchableOpacity>
                        </View>
                    );
                })}
                </View>
      </ScrollView>
      </View>
);
            
}


export const OrdenCloths = ({route}) => {
    const [orden, setOrden] = useState([])
    const getDetailbyId = async (id) => {
        const ref = firebase.firestore().collection('ClothesAndAccesories').doc(id)
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
      getDetailbyId(route.params.orden)
     
     const orden = [];
           
       
    });


    return (
        <View style={styles.container}>
        <HeaderGeneral/>
        <ScrollView>
            <View>
            {
                orden.map((orden) => {
                    return (
                        <View>
                             <Title style={styles.txt}>Nombre: {orden.name}</Title>
                             <Image style={styles.image}
                             source = {{ uri :`${orden.image}` }}
                             />
                             <Text style={styles.txt}>Descripcion</Text>
                             <Text style={styles.txt}>{orden.description}</Text>
                             <Text style={styles.txt}>Precio: ${orden.price}</Text>
                             <Text style={styles.txt}>Tiempo Estimado: {orden.time}</Text>
                             <TouchableOpacity onPress={() => {navigation.navigate("TusOrdenes")}} style={styles.button} >
                                 <Text style={styles.texto}>COMPRAR</Text>
                             </TouchableOpacity>
                        </View>
                    );
                })}
                </View>
      </ScrollView>
      </View>
);
            
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.black,
      },
    image: {
        alignSelf: "center", 
        height: 200, 
        width:290, 
        borderRadius: 20,
        top: 5
    }, 
    button: {
        backgroundColor: theme.colors.red, 
        height: 70, 
        width: 110, 
        borderRadius: 20, 
        alignSelf: 'center'
    }, 
    txt:{
        color: theme.colors.white, 
        textAlign:'justify', 
        margin:12, 
        fontSize: 16
    }, 
    texto: {
        color: theme.colors.white, 
        textAlign: 'center', 
        top: 22, 
        fontSize: 16, 
        fontWeight: 'bold'
    }
    
})


