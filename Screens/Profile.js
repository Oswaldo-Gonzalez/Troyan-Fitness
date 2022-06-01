import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButtom from '../components/CustomButtom';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Profile({ navigation }){

    function login() {
        navigation.navigate("Login");
      }

    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={{flexDirection: 'row', width:'100%', height:50,backgroundColor:'black',marginTop:-28}}>
                <Text style={{fontSize: 30, color: 'white', paddingLeft: 150, marginTop:-25}}>Perfil</Text>
                <Icon style={{position:'absolute', right:300,top:10 , color:'white'}}
                    name='arrow-back'
                    size={30}
                    onPress={()=> navigation.navigate("Main")}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>Total</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={{fontSize: 25, color: 'black', marginTop:-30, marginLeft:15}}>5</Text>
                <Text style={{fontSize: 25, color: 'black', marginTop:-30, marginLeft:125}}>20</Text>
                <Text style={{fontSize: 25, color: 'black', marginTop:-30, marginLeft:255}}>30</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={{fontSize: 15, color: 'black', marginTop:-25, marginLeft:0}}>Ejercicios</Text>
                <Text style={{fontSize: 15, color: 'black', marginTop:-20, marginLeft:125}}>Kcal</Text>
                <Text style={{fontSize: 15, color: 'black', marginTop:-20, marginLeft:245}}>Minuto</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>Objetivo</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>50 Kcal</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>Fecha Inicio</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>08/04/2022</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>Peso</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>110 Kg</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>Altura</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <Text style={styles.text}>170 Cm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.box2}>
                <CustomButtom text={"Cerrar Sesion"} color={"black"} action={login}/>
            </SafeAreaView>
        
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
     borderBottomColor:'red',
     borderWidth:2
    },
    box:{
        backgroundColor: 'white',
        height: 40,
        width: 300,
        alignItems: 'flex-start',
        alignContent: 'center',
        marginLeft: 25,
        marginRight: 25,
        
    },
    box2:{
        backgroundColor: 'white',
        height: 90,
        width: 300,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        
    },
    text:{
        fontSize: 15, 
        color: 'black', 
        marginTop:-20, 
        marginLeft:0
    }
});