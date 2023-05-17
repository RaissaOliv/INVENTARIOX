import React from 'react';
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { StyleSheet, StatusBar, SafeAreaView, View, TouchableOpacity,} from 'react-native';
import axios from 'axios';
import { useState, createContext } from 'react';
import FormData from 'form-data';
import Texto from "../componentes/Texto";
import "./PlantaDetalhes";
import AppLoading from 'expo-app-loading';
import Lista from '../componentes/Lista';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaInv from '../componentes/ListaAdc';
import { Camera } from 'expo-camera';
import FotoCamera from '../componentes/CameraAPI';
const windowWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();


export default function Home() {
  const navigation = useNavigation();
   const [resultado, setResultado] = useState("Essa vai ser a url da foto recebida pela api");
  const [melhorEspecie, setMelhor] = useState("O nome da planta aparecerá aqui!!");

  //função para abrir a galeria e chamar o plantNet
  const handleImagePicker = async () =>{
  const result =  await ImagePicker.launchImageLibraryAsync({
    aspect: [4,4],
    allowsEditing: true,
    base64: true,
    quality: 1,
  });

  if(!result.canceled){
    //chama o plantNet
   const API_LANG = '&lang=pt-br';
      const form = new FormData();

      form.append('organs', "flower");
      form.append('images', {
        uri: result.uri,
        name: 'image.jpg',
        type: 'image/jpg'
      });

      const project = 'all';
      try {
        const { status, data } = await axios.post(
          `https://my-api.plantnet.org/v2/identify/${project}?api-key=2b109TRsLJrxklkWylCt3U3${API_LANG}&include-related-images=true`,
          form,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        console.log('status', status);
        console.log('data', data);
        setResultado(data.results[0].images[0].url.s);
        console.log("imagem", resultado);
         setMelhor(data.bestMatch);
         
         navigation.navigate('Detalhes', {
          plantaNomeCientifico: resultado,
          plantaNome: melhorEspecie,
        });
      } catch (error) {
        console.error('error', error);
      }
      
  }
}


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
    <Texto style={estilos.texto}>Adicionado ao inventário recentemente</Texto>
    <ListaInv/>
    </SafeAreaView>


    <View style={estilos.barra}>

        <TouchableOpacity onPress={handleImagePicker}>
        <MaterialIcons name="add-photo-alternate" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={FotoCamera}>
       <Feather name="camera" size={24} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Entypo name="box" size={24} color="black" />
        </TouchableOpacity>
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
