import react from "react";
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { View, Image, SafeAreaView, StyleSheet, Dimensions, ScrollView } from "react-native";
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


import Texto from "../componentes/Texto";
import { adicionarItem } from "../componentes/Lista";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

export default function Planta({route}){
    const navigation = useNavigation();
    const {plantaNome, plantaNomeCientifico } = route.params;
    console.log(plantaNome);
    console.log(plantaNomeCientifico);
    const [fonteCarregada] = useFonts({
        "QuicksandRegular": Quicksand_400Regular,
        "QuicksandBold": Quicksand_700Bold});
        
      if(!fonteCarregada){
       return <AppLoading/>
      } 
    
      else {
    return( <>     
    <SafeAreaView style={{minHeight: '100%'}}>

        <View style={estilos.header}>
            <TouchableOpacity  onPress={()=> {navigation.navigate("Home")}}>
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Texto style={{fontSize: 20, fontWeight: "bold"}}>Foto e informação</Texto>
        </View>

        <View style={estilos.tituloImagem}>
        <Texto style={estilos.titulo}>{plantaNome}</Texto>
        <Image source={{uri: plantaNomeCientifico}} style={estilos.imagem}></Image>
        </View>

        <View>

            <Texto style={estilos.subtitulo}>NOME CIENTÍFICO:</Texto>
            <Texto style={estilos.textoPadrao}>{plantaNome}</Texto>

        </View>

        <View style={estilos.botoes}>
            
            <TouchableOpacity style= {estilos.botao} onPress={()=> {
                navigation.navigate("Home");
                }}>
                <Texto style={estilos.textoBotao}>Cancelar</Texto>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
    </>
    )
      }
}

const estilos = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        alignItems: "center",
        marginTop: 40,
        margin: 10,
      },

    tituloImagem:{
        alignContent: "center",
        alignItems: "center"
    },

    titulo: {
        fontSize: 20,
        textAlign: "center",
        color: "#89DA85",
        fontWeight: "bold",
    },

    imagem: {
        width: windowWidth/1.2,
        height: windowHeight/3.7,
        borderRadius: 10,
        margin: 8,
    },

    subtitulo: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#89DA85",
        marginLeft: 35,
        marginTop: 15
    },

    textoPadrao: {
        marginLeft: 35,
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
    
    botoes: {
        flexDirection: "row",
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0, 
        margin: 20, 
        marginLeft: windowWidth/16,
        alignContent: "center",
         flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        gap: 10,
        
    },

    botao: {
        backgroundColor: '#89DA85',
        borderRadius: 5,
        height: 50,
        flex: 1, 
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',

        
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
    },
    
    mapa: {

        borderRadius: 10,
        margin: 10,
        marginTop: 20,
        alignContent: "center",
        width: windowWidth/1.1,
        height: windowHeight/3
    },


})