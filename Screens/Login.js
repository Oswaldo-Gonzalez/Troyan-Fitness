import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButtom from '../components/CustomButtom';

export default function App({ navigation }) {

  function registro() {
      navigation.navigate("Registro");
  }
  function main() {
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flexDirection: 'row', width:'100%', height:70,backgroundColor:'black',marginTop:-309,}}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
      </SafeAreaView>
      <Text style={styles.login_header}>Iniciar Sesión</Text>
      <TextInput style={styles.input_login} placeholder="Usuario" />
      <TextInput style={styles.input_login} placeholder="Contraseña" secureTextEntry={true}/>
      
      <CustomButtom text={"Ingresar"} color={"black"} action={main}/>
      <SafeAreaView></SafeAreaView>
      <CustomButtom text={"Registro"} color={"black"} action={registro}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_login: {
    width:'90%', 
    height: 55, 
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth:1,
    borderRadius:10,
    fontSize: 22,
    paddingLeft: 10,
    marginBottom:20,
  },
  login_header:{
    fontSize:40, 
    marginBottom:40, 
    fontWeight:'bold'
  },
  image: {
    marginTop:-27,
    marginLeft:140,
    height:70,
    width: 70,
},
});
