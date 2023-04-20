import { StyleSheet, StatusBar, SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
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
  
   <View style={styles.container}>
   <Text style={styles.titulos}>Entre com seu email e senha para acessar a conta</Text>
   <Text style={styles.QuicksandRegular}>Email: </Text>
   <TextInput style = {styles.CampoInput} placeholder='email'></TextInput>
   <Text style={styles.QuicksandRegular}>Senha: </Text>
   <TextInput style = {styles.CampoInput} placeholder='senha'></TextInput>
   <TouchableOpacity style={styles.botao}>
    <Text style={styles.textoBotao}>Entrar</Text>
   </TouchableOpacity>
   <StatusBar style="auto" />
   </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    padding: 20,
   alignItems: 'flex-start',
   

  },
  titulos: {
    fontSize: 25,
    color: '#000', 
    fontFamily: 'QuicksandBold',
    paddingBottom: 30,
    paddingTop: 50
   
  },
  textoComum: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'QuicksandRegular',
    textAlign: 'center'
    },
  botao: {
    backgroundColor: '#89DA85',
    padding: 10, 
    borderRadius: 5,
    margin: 10,
    width: "90%",
    height: 40,
    position: 'absolute',
    bottom:0,
    alignSelf: 'center',    
  marginBottom: 40

  },

  textoBotao: {
    color: '#000000', 
    textAlign: 'center', 
    fontFamily: 'QuicksandBold'
  },

  CampoInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderTopColor: "#FFF",
    borderBottomColor: "#000",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderRadius: 2
  },
}

);
