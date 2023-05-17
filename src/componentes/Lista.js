import { FlatList, View, StyleSheet, Dimensions,Image, TouchableOpacity} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import Texto from "../componentes/Texto"
import Brocolis from "../../assets/Brocolis.jpg"
import Maca from "../../assets/Maca.jpg"

export const adicionarItem = (novoItem) => {
  itens.unshift(novoItem);
};

const width = Dimensions.get
export const itens = [
  {
      nome: "Mauritia flexuosa",
      imagem: "https://4.bp.blogspot.com/_I0mUEfLk5wI/S3zEIhu7F4I/AAAAAAAAA1E/hRHvDv1XHPQ/w1200-h630-p-k-no-nu/mingau+de+miriti1.jpg"
    },
    {
      nome: "Cyperus articulatus",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cyperus_articulatus.jpg/420px-Cyperus_articulatus.jpg"
    }
  ]

export default function Lista(){
  const navigation = useNavigation();

  const goPlantadetalhes = (nome, imagem) => {
    navigation.navigate('ClickView', {
      plantaNomeCientifico: imagem,
      plantaNome: nome,
    });
  };

  return (
    <FlatList
    data={itens}
    keyExtractor={item=> item.nome}
    renderItem={({item}) =>
    <TouchableOpacity onPress={() => {goPlantadetalhes(item.nome, item.imagem)}}>
  <View style={{height: 210,}}>
    <View style={estilos.lista}>
    <Image source ={{uri: item.imagem}} style={estilos.imagem}></Image>
    <Texto style={estilos.texto}>{item.nome}</Texto>
    </View>
      </View>
      </TouchableOpacity>}
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


