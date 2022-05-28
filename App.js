import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './Screens/Login';
import Registro from './Screens/Registro';
import Main from './Screens/Main';
import Profile from './Screens/Profile';
import MainBrazo from './Screens/MainBrazo';
import MainAbdo from './Screens/MainAbdo';
import MainHombro from './Screens/MainHombro';
import MainPierna from './Screens/MainPierna';
import PiernaBasico from './Screens/PiernaBasico';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="MainBrazo" component={MainBrazo}/>
        <Stack.Screen name="MainAbdo" component={MainAbdo}/>
        <Stack.Screen name="MainHombro" component={MainHombro}/>
        <Stack.Screen name="MainPierna" component={MainPierna}/>
        <Stack.Screen name="PiernaBasico" component={PiernaBasico}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


