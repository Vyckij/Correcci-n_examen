// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Si estás usando React Navigation

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // A donde va despues 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../imagenes/uce.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>Bienvenido</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
