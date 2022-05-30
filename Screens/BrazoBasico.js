import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, SafeAreaView, Modal, Pressable, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import Video from "react-native-video";


export default function Main({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Salto tijera</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:07</Text>
                    <Modal 
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Icon
                                    name="arrow-back-outline"
                                    size={50}
                                    onPress={() => setModalVisible(!modalVisible)}
                                />
                                <Text>Hola</Text>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </TouchableOpacity>
                        
            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones con inclinación</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:19</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star2.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones en caja</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:12</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star2.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:07</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star2.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones con inclinación</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:19</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star2.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Flexiones con apoyo</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:10</Text>
                </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity>
                <SafeAreaView style={styles.box}>
                    <Image style={styles.image} source={require('../assets/star2.png')} />
                    <Text style={{fontSize: 20, color: 'black', marginTop:-50}}>Estiramiento Cobra</Text>
                    <Text style={{fontSize: 20, color: 'black'}}>00:20</Text>
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
},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});
