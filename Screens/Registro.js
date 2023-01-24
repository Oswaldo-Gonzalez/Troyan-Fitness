import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import CustomButtom from '../components/CustomButtom';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase';

export default function App({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
      console.log('Cuenta Creada')
      Alert.alert("Cuenta Creada");
      const user = userCredential.user;
      navigation.navigate("Login");
      console.log(user)
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message);
    })
  }

  function login() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flexDirection: 'row', width:'100%', height:70,backgroundColor:'black',marginTop:-160,}}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
      </SafeAreaView>
      <Text style={styles.login_header}>Registrar</Text>
      <TextInput style={styles.input_login} value={email} onChangeText={text => setEmail(text)} placeholder="Correo Electronico" />
      <TextInput style={styles.input_login} placeholder="Usuario" />
      <TextInput style={styles.input_login} value={password} onChangeText={text => setPassword(text)} placeholder="Contraseña" secureTextEntry={true}/>
      <TextInput style={styles.input_login} placeholder="Peso" />
      <TextInput style={styles.input_login} placeholder="Altura" />
      
      <CustomButtom text={"Registro"} color={"black"} action={handleCreateAccount}/>

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
    marginLeft:160,
    height:70,
    width: 70,
},
});