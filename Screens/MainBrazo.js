import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
 
                    
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/star.png')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Nivel Básico</Text>
                <Text style={{fontSize: 20, color: 'black'}}>1:45</Text>
            </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/star2.png')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Nivel Avanzado</Text>
                <Text style={{fontSize: 20, color: 'black'}}>3:15</Text>
            </SafeAreaView>
        </TouchableOpacity>

        
    </SafeAreaView>
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
  header:{
    fontSize:30, 
    marginBottom:40, 
    marginTop:5,
    fontWeight:'bold',
  },
  content:{
    height: 600
},
box:{
    backgroundColor: 'white',
    height: 120,
    width: 300,
    alignItems: 'center',
    alignContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 40,
    marginLeft: 25,
    marginRight: 25
},
image: {
    marginLeft: 25,
    marginTop: 30,
    marginRight:240,
    height: 50,
    width: 50,
},
});
