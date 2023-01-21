import { StyleSheet, Text, ImageBackground, TouchableOpacity,SafeAreaView, Image, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native-web';


export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

        <SafeAreaView style={styles.headerBar}>
          <ImageBackground source={ require('../assets/Alimentacion.jpg') } resizeMode="cover" style={styles.image2}>
              <Text style={{fontSize: 30, color: 'white', paddingLeft: 130, marginTop:20}}>Nutrición</Text>
              <Icon style={{position:'absolute', right:310,top:20 , color:'white'}}
                name='arrow-back'
                size={50}
                onPress={()=> navigation.navigate("Main")}
              />
          </ImageBackground>
        </SafeAreaView>

        <ScrollView style={styles.scroll} /* Makes scroll appear on screen */> 
          <SafeAreaView /* Keeps cards into the ScrollView */> 

            <TouchableOpacity onPress={() => Linking.openURL("https://www.cancer.org/es/noticias-recientes/cuanta-agua-debo-tomar.html#:~:text=La%20mayoría%20de%20los%20hombres,de%20modo%20que%20también%20cuentan.")}>
              <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
                <SafeAreaView style={styles.image2} /* Card header */>
                  <ImageBackground source={ require('../assets/agua.jpg') } resizeMode="cover" style={styles.cardImage} imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                    <Text style={{fontSize: 25,color: "black", fontWeight: "bold"}}>¿Cuánta agua debo tomar?</Text>
                  </ImageBackground>
                </SafeAreaView>
                <SafeAreaView style={styles.infoBox} /* Card text container */>
                  <Text style={styles.textInfo}>Probablemente haya oído que debe tomar 8 vasos de agua al día. En realidad eso se acerca bastante a la verdad, pero depende de quién usted es, de dónde vive y de cuánto ejercicio hace cada día.</Text>
                  <Text style={styles.textInfo}>Según la Clínica Mayo, el agua compone aproximadamente el 60% de su peso corporal y cada uno de los sistemas de su cuerpo dependen de ella.  Si no toma suficiente agua, puede que se sienta cansado e incluso se deshidrate. Eso se debe a que su cuerpo sigue perdiendo agua a través de la respiración, la transpiración y al orinar. Usted necesita continuar consumiendo líquidos para reemplazar el agua que su cuerpo necesita.</Text>
                </SafeAreaView>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.cdc.gov/physicalactivity/basics/spanish/Cuanta-actividad-fisica-necesitan-los-adultos.htm#:~:text=Cada%20semana%2C%20los%20adultos%20necesitan,(enlace%20solo%20en%20inglés).")}>
              <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
                <SafeAreaView style={styles.image2} /* Card header */>
                  <ImageBackground source={ require('../assets/exer.png') } resizeMode="cover" style={styles.cardImage} imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                    <Text style={{fontSize: 25,color: "white", fontWeight: "bold"}}>¿Cuánta actividad física debo realizar?</Text>
                  </ImageBackground>
                </SafeAreaView>
                <SafeAreaView style={styles.infoBox} /* Card text container */>
                  <Text style={styles.textInfo}>Aunque 150 minutos de actividad física a la semana parece mucho, pero no tiene que hacerlo todo de una vez. Podrías hacer 30 minutos al día, 5 días a la semana. También puede distribuir su actividad durante la semana y dividirla en períodos de tiempo más pequeños.</Text>
                  <Text style={styles.textInfo}>Los adultos deben moverse más y sentarse menos durante el día. Hacer al menos algo de actividad física es mejor que nada. Los adultos que se mantienen sentados por menos tiempo y hacen cualquier cantidad de actividad física moderada o intensa pueden obtener beneficios a su salud.</Text>
                </SafeAreaView>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.cancer.org/es/noticias-recientes/cuanta-agua-debo-tomar.html#:~:text=La%20mayoría%20de%20los%20hombres,de%20modo%20que%20también%20cuentan.")}>
              <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
                <SafeAreaView style={styles.image2} /* Card header */>
                  <ImageBackground source={ require('../assets/agua.jpg') } resizeMode="cover" style={styles.cardImage} imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                    <Text style={{fontSize: 25,color: "white", fontWeight: "bold"}}>¿Cuánta agua debo tomar?</Text>
                  </ImageBackground>
                </SafeAreaView>
                <SafeAreaView style={styles.infoBox} /* Card text container */>
                  <Text style={styles.textInfo}>Probablemente haya oído que debe tomar 8 vasos de agua al día. En realidad eso se acerca bastante a la verdad, pero depende de quién usted es, de dónde vive y de cuánto ejercicio hace cada día.</Text>
                  <Text style={styles.textInfo}>Según la Clínica Mayo, el agua compone aproximadamente el 60% de su peso corporal y cada uno de los sistemas de su cuerpo dependen de ella.  Si no toma suficiente agua, puede que se sienta cansado e incluso se deshidrate. Eso se debe a que su cuerpo sigue perdiendo agua a través de la respiración, la transpiración y al orinar. Usted necesita continuar consumiendo líquidos para reemplazar el agua que su cuerpo necesita.</Text>
                </SafeAreaView>
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.cancer.org/es/noticias-recientes/cuanta-agua-debo-tomar.html#:~:text=La%20mayoría%20de%20los%20hombres,de%20modo%20que%20también%20cuentan.")}>
              <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
                <SafeAreaView style={styles.image2} /* Card header */>
                  <ImageBackground source={ require('../assets/agua.jpg') } resizeMode="cover" style={styles.cardImage} imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                    <Text style={styles.textTitle}>¿Cuánta agua debo tomar?</Text>
                  </ImageBackground>
                </SafeAreaView>
                <SafeAreaView style={styles.infoBox} /* Card text container */>
                  <Text style={styles.textInfo}>Probablemente haya oído que debe tomar 8 vasos de agua al día. En realidad eso se acerca bastante a la verdad, pero depende de quién usted es, de dónde vive y de cuánto ejercicio hace cada día.</Text>
                  <Text style={styles.textInfo}>Según la Clínica Mayo, el agua compone aproximadamente el 60% de su peso corporal y cada uno de los sistemas de su cuerpo dependen de ella.  Si no toma suficiente agua, puede que se sienta cansado e incluso se deshidrate. Eso se debe a que su cuerpo sigue perdiendo agua a través de la respiración, la transpiración y al orinar. Usted necesita continuar consumiendo líquidos para reemplazar el agua que su cuerpo necesita.</Text>
                </SafeAreaView>
              </SafeAreaView>
            </TouchableOpacity>

          </SafeAreaView>
        </ScrollView>
        

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBar: {
    marginTop: 22,
    flexDirection: 'row',
    width:'100%',
  },
  image2: {
    height: 100,
    width: '100%',
  },
  cardImage: {
    height: 100,
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    height: 400,
    width: 350,
    //backgroundColor: "red",
    margin:10,
    borderWidth: 1,
    borderRadius: 20
  },
  infoBox: {
    height: "100%",
    width: "100%",
  },
  textInfo: {
    margin: 10,
    marginBottom: 0,
    fontSize: 15
  },
  textTitle: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  },
  scroll: {
    centerContent: 1,
    height: "100%"
  }
});
