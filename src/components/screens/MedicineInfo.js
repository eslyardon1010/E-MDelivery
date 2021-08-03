import React, {useEffect, useState} from 'react'

import 'firebase/firestore';
import { ScrollView, View, Text } from 'react-native';
import {
    InfoMedicineAlimentario,
    InfoMedicineAntiinfecciosos,
    InfoMedicineCardiovascular,
    InfoMedicineDermatologico,
    InfoMedicineHormonales,
    InfoMedicineHuesos,
    InfoMedicineSangre,
    InfoMedicineUrinario
} from '../../firebase/consultMedicine';
const infoFood = ({route, navigation}) => {
    const { informacion } = route.params;
    
    if (informacion == 'Alimentario y Metabolismo') {
        return (
            <View>
            <ScrollView>
                   <InfoMedicineAlimentario type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Sangre y órganos") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineSangre type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Sistema cardiovascular") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineCardiovascular type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos dermatológicos") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineDermatologico type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos genitourinario") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineUrinario type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos hormonales") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineHormonales type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos Antiinfecciosos") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineAntiinfecciosos type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos Huesos") {
        return(
            <View>
            <ScrollView>
                   <InfoMedicineHuesos type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }

    return null;
}


export default infoFood