import { FlatList, View, StyleSheet, Dimensions,Image} from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import Texto from "../componentes/Texto"
import Brocolis from "../../assets/Brocolis.jpg"
import Maca from "../../assets/Maca.jpg"
import { ScrollView } from "react-native";

const width = Dimensions.get
const itens = [
  {
      nome: "Brócolis",
      imagem: Brocolis
    },
    {
      nome: "Maçã",
      imagem: Maca
    }
  ]

export default function Lista(){

  return (
    <FlatList
    data={itens}
    keyExtractor={item=> item.nome}
    renderItem={({item}) =>
  <View style={{height: 210,}}>
    <View style={estilos.lista}>
    <Image source ={item.imagem} style={estilos.imagem}></Image>
    <Texto style={estilos.texto}>{item.nome}</Texto>
    </View>
      </View>}
  horizontal
    />
  )
}

const estilos = StyleSheet.create({
  lista: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
   elevation: 3,
   height:190,
    margin: 10,
    borderRadius: 5
  },
  imagem: {
    width: 157,
    height: 120,
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5,
    gap: 35
  },
  texto: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5
  }
}
)


