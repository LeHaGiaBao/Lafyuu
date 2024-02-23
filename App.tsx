import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/auth/SplashScreen';
import LoginScreen from './src/screens/auth/Login/LoginScreen';
import RegisterScreen from './src/screens/auth/Register/RegisterScreen';
import AppScreen from './src/screens/app/AppScreen';
import OfferScreen from './src/screens/app/OfferScreen';
import OfferViewScreen from './src/screens/app/OfferViewScreen';
import FavoriteProductScreen from './src/screens/app/FavoriteProductScreen';
import NotificationScreen from './src/screens/app/NotificationScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // Set the background color to white
  },
};

function App(): React.JSX.Element {
  const [showInitialView, setShowInitialView] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialView(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [])

  if (showInitialView) {
    return (
      <SplashScreen />
    )
  }
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppScreen"
            component={AppScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OfferScreen"
            component={OfferScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OfferViewScreen"
            component={OfferViewScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FavoriteScreen"
            component={FavoriteProductScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
