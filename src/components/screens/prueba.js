import React, {useEffect, useState} from 'react'
import {firebase} from '../../firebase/index'
import 'firebase/firestore'
import { View } from 'react-native'

const ComidaDetail = (props) => {
 const getComidabyId = async(id)=> {
     const dbRef= firebase.firestore().collection("Food").doc(id)
     const doc = await dbRef.get();
     const food = doc.data();
     console.log(food);
     
 }

 useEffect(() => {
     getComidabyId(props.route.params.foodId)
 })

    return(
<View>
    Detail Comida
</View>
    )
}

export default ComidaDetail