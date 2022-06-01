import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
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
import PiernaAvanzado from './Screens/PiernaAvanzado';
import BrazoBasico from './Screens/BrazoBasico';
import BrazoAvanzado from './Screens/BrazoAvanzado';
import AbdoBasico from './Screens/AbdoBasico';
import AbdoAvanzado from './Screens/AbdoAvanzado';
import HomBasico from './Screens/HomBasico';
import HomAvanzado from './Screens/HomAvanzado';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="MainBrazo" component={MainBrazo} options={{ headerShown: false }}/>
        <Stack.Screen name="MainAbdo" component={MainAbdo} options={{ headerShown: false }}/>
        <Stack.Screen name="MainHombro" component={MainHombro} options={{ headerShown: false }}/>
        <Stack.Screen name="MainPierna" component={MainPierna} options={{ headerShown: false }}/>
        <Stack.Screen name="PiernaBasico" component={PiernaBasico} options={{ headerShown: false }}/>
        <Stack.Screen name="PiernaAvanzado" component={PiernaAvanzado} options={{ headerShown: false }}/>
        <Stack.Screen name="BrazoBasico" component={BrazoBasico} options={{ headerShown: false }}/>
        <Stack.Screen name="BrazoAvanzado" component={BrazoAvanzado} options={{ headerShown: false }}/>
        <Stack.Screen name="AbdoBasico" component={AbdoBasico} options={{ headerShown: false }}/>
        <Stack.Screen name="AbdoAvanzado" component={AbdoAvanzado} options={{ headerShown: false }}/>
        <Stack.Screen name="HomBasico" component={HomBasico} options={{ headerShown: false }}/>
        <Stack.Screen name="HomAvanzado" component={HomAvanzado} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


