import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import { HomeScreen, LoginScreen } from './app/Screens.js'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name= "Login" component={ LoginScreen } />
        <Stack.Screen name= "Home" component={ HomeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
