import { image, StyleSheet, FlatList, StatusBar, SafeAreaView, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
import React from 'react';
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Texto from "../INVENTARIOX/src/componentes/Texto";

import AppLoading from 'expo-app-loading';

import Lista from './src/componentes/Lista';

const windowWidth = Dimensions.get('window').width;
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
      
    <SafeAreaView style={estilos.header}>
    <View style={{layoutDirection: "ltr", alignContent: 'flex-start', alignItems: "flex-start"}}>
      <Ionicons name="search-outline" size={25} color="black" />
    </View>
  <View style={{alignContent: "center", alignItems: "center",}}>
   <Texto style={{ fontWeight: "bold", textAlign: "center", fontSize: 20}}>Pesquisar cultura</Texto>
    </View>
    <View style={{alignContent: "flex-end", layoutDirection: "rtl", alignItems: "flex-end"}}>
    <FontAwesome name="user-circle" size={25} color="black" />
    </View>
    </SafeAreaView>

    <Texto style={estilos.texto}>Visto recentemente</Texto>
    <Lista/>
    <Texto style={estilos.texto}>Histórico de pesquisa</Texto>
    <Lista/>
    </SafeAreaView>
    <View style={estilos.barra}>
    <Feather name="camera" size={24} color="black"/>
    <AntDesign name="home" size={24} color="black" />
    <Entypo name="box" size={24} color="black" />
    </View>

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth/5.5,
    
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
flexDirection: "row",
padding: 10,
gap: 66,
justifyContent: 'center',
alignItems: "center",

position: "absolute",
width: 300,
height: 70,
left: 50,
bottom: 17,
marginBottom: 20,

backgroundColor: "#89DA85",
borderRadius: 10
  }
  


})

  


})
