import React from 'react';
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import {Dimensions} from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { StyleSheet, StatusBar, SafeAreaView, View, TouchableOpacity,} from 'react-native';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/telas/Home";
import Mapa from "./src/telas/Mapa"
import Lista from './src/componentes/Lista';
import PlantaDetalhes from './src/telas/PlantaDetalhes';
const windowWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();
import Map from "./MapScreen";
import CameraAPI from './src/componentes/CameraAPI';
import FotoCamera from './src/componentes/CameraAPI';
import Planta from './src/telas/Planta';

export default function App() {


  const [fonteCarregada] = useFonts({

    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold
}
);


  if(!fonteCarregada){

   return <AppLoading/>

  } 

  else {
  return (<>

<NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Home">
  <Stack.Screen name = "Home" component={Home}/>
  <Stack.Screen name = "Detalhes">
  {(props) => <PlantaDetalhes {...props} />}
  </Stack.Screen>
  <Stack.Screen name= "Mapa" component={Mapa}/>
  <Stack.Screen name = "MapScreen" component={Map}/>
  <Stack.Screen name = "ClickView" component={Planta}/>
  </Stack.Navigator>
</NavigationContainer>

</>)
}
}



