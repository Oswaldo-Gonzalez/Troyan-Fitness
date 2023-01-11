import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'center', width:'100%'}}>
            <ImageBackground source={ require('../assets/Abdominales.png') } resizeMode="cover" style={styles.image2}>
                <Text style={{fontSize: 30, color: 'white', paddingLeft: 100, marginTop:20}}>Abdominales</Text>
                <Icon style={{position:'absolute', right:300,top:20 , color:'white'}}
                  name='arrow-back'
                  size={50}
                  onPress={()=> navigation.navigate("Main")}
                />
            </ImageBackground>
        </SafeAreaView>
                    
        <TouchableOpacity onPress={()=> navigation.navigate("AbdoBasico")}>
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/abdomenbasico.png')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-40}}>Nivel Básico</Text>
            </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("AbdoAvanzado")}>
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/abdomenavanzado.png')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-40}}>Nivel Avanzado</Text>
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
image2: {
  marginTop:-220,
  height: 100,
  width: '100%',
},
});
