import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const [imageStyle, setImageStyle] = useState(styles.image);

  const handleImagePressIn = () => {
    setImageStyle([styles.image, styles.imagePressed]);
  };

  const handleImagePressOut = () => {
    setImageStyle(styles.image);
  };

  useEffect(() => {
    const LoginCheck = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          navigation.replace("Home");
        } else {
          navigation.replace("Signup");
        }
      } catch (error) {
        console.log("Error in logging", error);
      }
    };
    LoginCheck();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>

      <TouchableOpacity onPressIn={handleImagePressIn} onPressOut={handleImagePressOut}>
        <Image source={require('../assets/images/logo.png')} style={imageStyle} />
      </TouchableOpacity>

      <Text style={styles.text}>Find movies that bring your mood back</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  imagePressed: {
    width: 280,
    height: 280,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5B5FE9',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
