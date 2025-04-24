import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/Screens/SplashScreen'
import Login from './src/Screens/Login'
import Navigation from './src/Navigation/Navigation'


const App = () => {
  return (
    <View style={styles.container}>
    <Navigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  }
})