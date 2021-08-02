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
import { HeaderGeneral } from '../../shared/Header';
const infoFood = ({route, navigation}) => {
    const { informacion } = route.params;
    
    if (informacion == 'Alimentario y Metabolismo') {
        return (
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineAlimentario type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
    ); 
    }else if (informacion == "Sangre y órganos") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineSangre type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Sistema cardiovascular") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineCardiovascular type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos dermatológicos") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineDermatologico type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos genitourinario") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineUrinario type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos hormonales") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineHormonales type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos Antiinfecciosos") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineAntiinfecciosos type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }else if (informacion == "Medicamentos Huesos") {
        return(
            <View>
                  <HeaderGeneral/>
            <ScrollView>
                   <InfoMedicineHuesos type={informacion} navigation={ navigation }/>  
          </ScrollView>
          </View>
        );
    }

    return null;
}


export default infoFood