import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native';


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Bienvenido</Text>    
                    
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <ImageBackground source={ require('../assets/BrazoPecho.png') } resizeMode="cover" style={styles.image}>
                    <Text style={{fontSize: 20, color: 'white', paddingRight: 50, paddingLeft: 25}}>Brazo y Pecho</Text>
                </ImageBackground>
            </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <ImageBackground source={ require('../assets/Abdominales.png') } resizeMode="cover" style={styles.image}>
                    <Text style={{fontSize: 20, color: 'white', paddingRight: 50, paddingLeft: 25}}>Abdominales</Text>
                </ImageBackground>
            </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <ImageBackground source={ require('../assets/HombroEspalda.png') } resizeMode="cover" style={styles.image}>
                    <Text style={{fontSize: 20, color: 'white', paddingRight: 50, paddingLeft: 25}}>Hombros y espalda</Text>
                </ImageBackground>
            </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <SafeAreaView style={styles.box}>
                <ImageBackground source={ require('../assets/Piernas.png') } resizeMode="cover" style={styles.image}>
                    <Text style={{fontSize: 20, color: 'white', paddingRight: 50, paddingLeft: 25}}>Piernas</Text>
                </ImageBackground>
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
    fontWeight:'bold'
  },
  content:{
    height: 600
},
box:{
    backgroundColor: 'gray',
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 40,
    marginLeft: 25,
    marginRight: 25
},
image: {
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    borderRadius:30,
},
});
