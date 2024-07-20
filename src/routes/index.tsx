import React, {memo, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '@/screens/auth/RegisterScreen';
import SplashScreen from '@/screens/auth/SplashScreen';
import {Routes} from './routes';
import LoginScreen from '@/screens/auth/LoginScreen';
import Home from '@/screens/tabs/Home';
import Explore from '@/screens/tabs/Explore';
import Cart from '@/screens/tabs/Cart';
import Offer from '@/screens/tabs/Offer';
import Account from '@/screens/tabs/Account';
import AppScreen from './AppScreen';

const Stack = createNativeStackNavigator();

function RoutesApp() {
  const [showInitialView, setShowInitialView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialView(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showInitialView) {
    return <SplashScreen />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.loginScreen}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.registerScreen}
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.appScreen}
            component={AppScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.homeScreen}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.exploreScreen}
            component={Explore}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.cartScreen}
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.offerScreen}
            component={Offer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.accountScreen}
            component={Account}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default memo(RoutesApp);
