import { StyleSheet, StatusBar, SafeAreaView, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';


export default function Login() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulos} >Entre seu email e senha para acessar sua conta</Text>
      <View style={{ alignItems: 'row', padding: 20}}>
      <Text style={{fontWeight:'200', padding: 10, textAlign:'center'}}>E-mail</Text>
      <TextInput style={styles.inputEstilo} placeholder='insira seu email'></TextInput>
      <Text style={{fontWeight:'200', padding: 10, textAlign:'center'}}>Senha</Text>
      <TextInput style={styles.inputEstilo} placeholder='insira sua senha'></TextInput>
      
      <View style={{flexDirection: 'column-reverse'}}>
      <TouchableOpacity
      style={styles.botao}
      >
       <Text style={styles.textoBotao}>Fazer login</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 20,
  },
  titulos: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
   
  },
  textoComum: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'sans-serif-condensed',
  },
  botao: {
    backgroundColor: '#74CD5E',
    padding: 10, 
    borderRadius: 5
  },

  textoBotao: {
    color: '#FFF', 
    textAlign: 'center', 
    fontWeight: 'bold'
  },

  textoMini: {
    color:"#000",
    
  },

  inputEstilo: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
