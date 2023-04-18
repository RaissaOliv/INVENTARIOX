import { StyleSheet, StatusBar, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useFonts, Quicksand_400Regular, Quicksand_700Bold} from '@expo-google-fonts/quicksand';

export default function TelaInicial() {
  const [fonteCarregada] = useFonts({
    "QuicksandRegular": Quicksand_400Regular,
    "QuicksandBold": Quicksand_700Bold});

  if(!fonteCarregada){
   <View></View>
  } 
  
  else {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '100%',
        padding: 20,
        alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74CD5E',
      }}>
    
    <View style={styles.container}>
      <Text style = {styles.titulos}>BEM VINDO AO INVENTARIOX {"\n"}</Text>
      <Text style = {styles.textoComum}>Entre com sua conta ou crie uma nova para acessar o conteúdo {"\n"}</Text>
      <TouchableOpacity
     style={styles.botao}
      >
       <Text style={styles.textoBotao}>Acessar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
     style={styles.botao}
      >
       <Text style={styles.textoBotao}>Criar nova conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(209, 255, 198,.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height:344.19,
    width: 357,
    elevation: 3,
    shadowColor: '#808080'
    
  },
  titulos: {
    fontSize: 20,
    fontFamily: "QuicksandBold",
    color: '#FFF',
    textAlign: 'center',
    lineHeight:25,
    width: 289,
    height: 45,
  },
  textoComum: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'QuicksandRegular',
    textAlign: 'center'
    },
  botao: {
    backgroundColor: '#FFF',
    padding: 10, 
    borderRadius: 5,
    margin: 10,
    width: 160,
    height: 40
    
  },

  textoBotao: {
    color: '#000000', 
    textAlign: 'center', 
    fontFamily: 'QuicksandBold'
  },
  
}

);
