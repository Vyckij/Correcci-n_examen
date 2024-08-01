import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import SplashScreen from './src/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milisegundos (3 segundos)
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <Navigation />}
    </NavigationContainer>
  );
}

/**
 * Metodo para llamar al splash
 * const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainScreen" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});**/

