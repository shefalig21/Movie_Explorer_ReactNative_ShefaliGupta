import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please fill all fields');
    } 
    else if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Enter a valid email');
    } 
    else if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters');
    } 
    else {
      Alert.alert('Login successful');
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="white"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../assets/images/glogo.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 25,
      backgroundColor: '#0C0F14',
    },
    innerContainer: {
    //   backgroundColor: '#0C0F14',
    //   width: '100%',
    //   borderRadius: 20,
    //   padding: 30,
    //   alignItems: 'center',
    //   shadowColor: '#000',
    //   shadowOpacity: 0.1,
    //   shadowRadius: 10,
    //   elevation: 5,
    backgroundColor: '#1F222A',
    width: '100%',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5B5FE9',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 60,
      textAlign: 'center',
      color: '#fff',
    },
    input: {
      height: 50,
      borderWidth: 0,
      borderRadius: 15,
      paddingHorizontal: 20,
      marginBottom: 18,
      width: '100%',
      fontSize: 16,
      backgroundColor: '#1F222A', 
      color: 'white',
    },
    button: {
      backgroundColor: '#5B5FE9',
      paddingVertical: 15,
      borderRadius: 15,
      alignItems: 'center',
      marginBottom: 20,
      width: '100%',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    orText: {
      textAlign: 'center',
      color: '#999',
      marginVertical: 10,
      fontSize: 14,
      marginBottom:18,
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 15,
      paddingVertical: 12,
      paddingHorizontal: 20,
      justifyContent: 'center',
      width: '100%',
    },
    googleIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    googleText: {
      fontWeight: 'bold',
      color: '#333',
      fontSize: 16,
    },
  });

  










































