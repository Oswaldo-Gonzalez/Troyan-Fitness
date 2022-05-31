import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/saltoT.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Salto tijera</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:07</Text>
                </SafeAreaView>
            </TouchableOpacity>
                        
            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/elebra.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Elevación de brazos</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:11</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/rom.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Tracción Romboide</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:10</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/elela.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Elevación lateral</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:11</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/flexap.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones con apoyo</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:10</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/gato.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Posición Gato-Vaca</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:29</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/bebe.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Posición de bebé</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:30</Text>
                </SafeAreaView>
            </TouchableOpacity>
            
        </ScrollView>
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
  header:{
    fontSize:30, 
    marginBottom:40, 
    marginTop:5,
    fontWeight:'bold',
  },
box:{
    backgroundColor: 'white',
    height: 90,
    width: 360,
    alignItems: 'center',
    //alignContent: 'center',
    borderColor: 'black',
    borderWidth: 2,

},
image: {
    marginLeft: 240,
    marginTop: 10,
    marginRight:-50,
    height: 50,
    width: 50,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth:1,
    //resizeMode:'stretch'

},
});
