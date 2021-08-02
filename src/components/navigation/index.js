import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import First from "../screens/First"
import AcountInformation from "../screens/AcountInformation"
import FoodInfo from '../screens/FoodInfo'
import ClothsAccesoriesScreen from '../screens/ClothsAccesoriesScreen';
import SuperMarketScreen from '../screens/SuperMarketScreen';
import FoodScreen from "../screens/FoodsScreen";
import MedicineScreen from '../screens/MedicineScreen';
import MedicineInfo from '../screens/MedicineInfo';
import SuperMarketInfo from '../screens/SuperMarketInfo';
import {OrdenFood, OrdenMedicine, OrdenCloths, OrdenSuper} from '../screens/YourOrden'
import YourOrdens from '../screens/YourOrdens'
import ClothsAccesoriesInfo from '../screens/ClothsAccesoriesInfo'
const Stack = createStackNavigator();

function Navigation({navigation}) {
  const { state, persistLogin } = useContext(AuthContext);

  // Verificar si existe un token de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

  // Prevenir que la pantalla de splash se oculte automáticamente
  SplashScreen.preventAutoHideAsync();

  // Ocultar la pantalla de splash hasta finalizar la verificación del token
  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator  screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AcountInformation" component={AcountInformation} />
              <Stack.Screen name="Comida" component={FoodScreen} />
               <Stack.Screen name="ComidaInformacion" component={FoodInfo} />
               <Stack.Screen name="Ropa-Accesorios" component={ClothsAccesoriesScreen} />
               <Stack.Screen name="Medicina" component={MedicineScreen} />
              <Stack.Screen name="Supermercado" component={SuperMarketScreen} />
              <Stack.Screen name="InformacionMedicina" component={MedicineInfo} />
              <Stack.Screen name="SupermercadoInfo" component={SuperMarketInfo} />
               <Stack.Screen name="TuOrden" component={OrdenFood} />
               <Stack.Screen name="MedicinaOrden" component={OrdenMedicine} />
               <Stack.Screen name="SuperOrden" component={OrdenSuper} />
               <Stack.Screen name="OrdenCloths" component={OrdenCloths} />  
              <Stack.Screen name="InformacionCloths" component={ClothsAccesoriesInfo} />
               
               <Stack.Screen name="TusOrdenes" component={YourOrdens} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="First" component={First} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}

export default Navigation;