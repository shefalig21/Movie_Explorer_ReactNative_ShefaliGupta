import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import HomeScreen from '../Screens/HomeScreen';

const Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

