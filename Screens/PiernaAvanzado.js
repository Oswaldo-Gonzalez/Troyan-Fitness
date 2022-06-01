import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'center', width:'100%'}}>
            <ImageBackground source={ require('../assets/Piernas.png') } resizeMode="cover" style={styles.image2}>
                <Text style={{fontSize: 30, color: 'white', paddingLeft: 130, marginTop:20}}>Piernas</Text>
                <Icon style={{position:'absolute', right:300,top:20 , color:'white'}}
                  name='arrow-back'
                  size={50}
                  onPress={()=> navigation.navigate("MainPierna")}
                />
            </ImageBackground>
        </SafeAreaView>
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
                    <Image style={styles.image} source={require('../assets/Gifs/Sentadillas.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Sentadillas</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:15</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/butt.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Butt Bridge</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:09</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/gluteoiz.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Gluteo costado Izquierda</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:13</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/gluteode.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Gluteo costado Derecha</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:13</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/zancada.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Zancada</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:12</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/gluteopa.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Gluteo Patada</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:17</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/Gifs/estpan.gif')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Estiramiento Pantorrilla</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:44</Text>
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
    resizeMode:'stretch'

},
image2: {
    marginTop:0,
    height: 100,
    width: '100%',
  },
});
