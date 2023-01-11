import { StyleSheet, Text, ImageBackground, TouchableOpacity,SafeAreaView, Image } from 'react-native';
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

            <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
              <SafeAreaView style={styles.image2} /* Card header */>
                <ImageBackground source={ require('../assets/Alimentacion.jpg') } resizeMode="cover" style={styles.image2}></ImageBackground>
              </SafeAreaView>
              <SafeAreaView style={styles.infoBox} /* Card text container */>
                <Text style={styles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, diam nec aliquet feugiat, justo eros hendrerit neque, ut vehicula dolor metus in enim. Donec at varius sapien. Nam nec quam faucibus, hendrerit arcu in, elementum erat. Fusce turpis mauris, bibendum id pellentesque id, pretium id nibh. Mauris ut hendrerit ex, non elementum purus. Phasellus sit amet turpis eu ligula lobortis ultricies lacinia eu nisi. Nam ligula augue, fermentum id faucibus nec, condimentum quis lorem. Suspendisse rhoncus quam tortor, vitae bibendum ante pulvinar id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis tristique quam. Fusce suscipit tincidunt efficitur. Mauris vulputate lorem sapien. Aliquam congue quis metus ut eleifend. Proin sed neque justo.</Text>
              </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
              <SafeAreaView style={styles.image2} /* Card header */>
                <ImageBackground source={ require('../assets/Alimentacion.jpg') } resizeMode="cover" style={styles.image2}></ImageBackground>
              </SafeAreaView>
              <SafeAreaView style={styles.infoBox} /* Card text container */>
                <Text style={styles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, diam nec aliquet feugiat, justo eros hendrerit neque, ut vehicula dolor metus in enim. Donec at varius sapien. Nam nec quam faucibus, hendrerit arcu in, elementum erat. Fusce turpis mauris, bibendum id pellentesque id, pretium id nibh. Mauris ut hendrerit ex, non elementum purus. Phasellus sit amet turpis eu ligula lobortis ultricies lacinia eu nisi. Nam ligula augue, fermentum id faucibus nec, condimentum quis lorem. Suspendisse rhoncus quam tortor, vitae bibendum ante pulvinar id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis tristique quam. Fusce suscipit tincidunt efficitur. Mauris vulputate lorem sapien. Aliquam congue quis metus ut eleifend. Proin sed neque justo.</Text>
              </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
              <SafeAreaView style={styles.image2} /* Card header */>
                <ImageBackground source={ require('../assets/Alimentacion.jpg') } resizeMode="cover" style={styles.image2}></ImageBackground>
              </SafeAreaView>
              <SafeAreaView style={styles.infoBox} /* Card text container */>
                <Text style={styles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, diam nec aliquet feugiat, justo eros hendrerit neque, ut vehicula dolor metus in enim. Donec at varius sapien. Nam nec quam faucibus, hendrerit arcu in, elementum erat. Fusce turpis mauris, bibendum id pellentesque id, pretium id nibh. Mauris ut hendrerit ex, non elementum purus. Phasellus sit amet turpis eu ligula lobortis ultricies lacinia eu nisi. Nam ligula augue, fermentum id faucibus nec, condimentum quis lorem. Suspendisse rhoncus quam tortor, vitae bibendum ante pulvinar id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis tristique quam. Fusce suscipit tincidunt efficitur. Mauris vulputate lorem sapien. Aliquam congue quis metus ut eleifend. Proin sed neque justo.</Text>
              </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.card} /* Card container (Card starts here) */>
              <SafeAreaView style={styles.image2} /* Card header */>
                <ImageBackground source={ require('../assets/Alimentacion.jpg') } resizeMode="cover" style={styles.image2}></ImageBackground>
              </SafeAreaView>
              <SafeAreaView style={styles.infoBox} /* Card text container */>
                <Text style={styles.textInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, diam nec aliquet feugiat, justo eros hendrerit neque, ut vehicula dolor metus in enim. Donec at varius sapien. Nam nec quam faucibus, hendrerit arcu in, elementum erat. Fusce turpis mauris, bibendum id pellentesque id, pretium id nibh. Mauris ut hendrerit ex, non elementum purus. Phasellus sit amet turpis eu ligula lobortis ultricies lacinia eu nisi. Nam ligula augue, fermentum id faucibus nec, condimentum quis lorem. Suspendisse rhoncus quam tortor, vitae bibendum ante pulvinar id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis tristique quam. Fusce suscipit tincidunt efficitur. Mauris vulputate lorem sapien. Aliquam congue quis metus ut eleifend. Proin sed neque justo.</Text>
              </SafeAreaView>
            </SafeAreaView>

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
    backgroundColor: "red",
  },
  image2: {
    height: 100,
    width: '100%',
  },
  card: {
    height: 400,
    width: 350,
    backgroundColor: "red",
    margin:10
  },
  infoBox: {
    height: "100%",
    width: "100%"
  },
  textInfo: {
    margin: 10
  },
  scroll: {
    centerContent: 1,
    height: "100%"
  }
});
