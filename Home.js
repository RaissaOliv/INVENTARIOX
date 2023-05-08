import { image, StyleSheet, FlatList, StatusBar, SafeAreaView, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
import React from 'react';
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';

import Texto from "../INVENTARIOX/src/componentes/Texto";

import AppLoading from 'expo-app-loading';

import Lista from './src/componentes/Lista';


export default function TelaInicial() {

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
    <SafeAreaView style={estilos.tela}>
    <Texto style={estilos.texto}>Visto recentemente</Texto>
    <Lista/>
    <Texto style={estilos.texto}>Histórico de pesquisa</Texto>
    <Lista/>
    </SafeAreaView>
    <View style={estilos.barra}></View>

  </>)

}
}

const estilos = StyleSheet.create ({

  tela: {
    margin: 10,
    justifyContent: 'flex-start',
    padding: 20,
   alignItems: 'flex-start',

  },
  container: {
    flexDirection: 'row',
    height: '100%',
    padding: 20,
    alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#74CD5E',
  },

  texto:{
    fontWeight: "bold",
    fontSize: 16,
    marginTop:50
  },

  barra: {
    display: "flex",
flexDirection: "row",
alignItems: "center",
padding: 10,
gap: 66,
justifyContent: "center",

position: "absolute",
width: 276,
height: 64,
left: 42.5,
bottom: 17,

backgroundColor: "#89DA85",
borderRadius: 10
  }
  


})
