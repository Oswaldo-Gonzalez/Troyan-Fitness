import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
                  onPress={()=> navigation.navigate("MainAbdo")}
                />
            </ImageBackground>
        </SafeAreaView>
        <ScrollView>
             
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/saltoT.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Salto tijera</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:07</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/crunch.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Crunch</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:15</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/esc.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Escalada</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:11</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/elepe.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Elevación de Piernas</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:15</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/twist.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Twist</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:08</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/esc.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Escalada</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:11</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/tabla.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Tablon</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:03</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/cobra.gif')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Estiramiento Cobra</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:20</Text>
            </SafeAreaView>
            
            <SafeAreaView style={styles.box}>
                <Image style={styles.image} source={require('../assets/Gifs/estpe.png')} />
                <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Estiramiento de Pecho</Text>
                <Text style={{fontSize: 20, color: 'black'}}>00:14</Text>
            </SafeAreaView>
             
        </ScrollView>
        <TouchableOpacity style={{alignItems:'center',width:'100%', height:70, backgroundColor:'black'}}  onPress={()=> navigation.navigate("Main")}>
            <SafeAreaView>
                <Text style={{fontSize: 30, color: 'white',marginTop:10,}}>Finalizar</Text>
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
    resizeMode:'stretch'

},
image2: {
    marginTop:0,
    height: 100,
    width: '100%',
  },
});
