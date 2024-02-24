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
import NotificationOfferScreen from './src/screens/app/NotificationOfferScreen';
import NotificationFeedScreen from './src/screens/app/NotificationFeedScreen';
import NotificationActivityScreen from './src/screens/app/NotificationActivityScreen';
import ProfileScreen from './src/screens/app/ProfileScreen';
import ChangeGenderScreen from './src/screens/app/ChangeGenderScreen';
import ChangeNameScreen from './src/screens/app/ChangeNameScreen';
import ChangeBirthdayScreen from './src/screens/app/ChangeBirthdayScreen';
import ChangeEmailScreen from './src/screens/app/ChangeEmailScreen';
import ChangePhoneScreen from './src/screens/app/ChangePhoneScreen';
import ChangePasswordScreen from './src/screens/app/ChangePasswordScreen';


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
          <Stack.Screen
            name="NotificationOffer"
            component={NotificationOfferScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotificationFeed"
            component={NotificationFeedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotificationActivity"
            component={NotificationActivityScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangeName"
            component={ChangeNameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangeGender"
            component={ChangeGenderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangeBirthday"
            component={ChangeBirthdayScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangeEmail"
            component={ChangeEmailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangePhone"
            component={ChangePhoneScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
