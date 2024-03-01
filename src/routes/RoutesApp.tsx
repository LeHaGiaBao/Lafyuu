import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BackgroundColor } from '../constants/colors';

import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';
import ForgotPassword from '../screens/auth/ForgotPassword';
import AppScreen from '../screens/app/AppScreen';
import OfferScreen from '../screens/app/tab/OfferScreen';
import OfferViewScreen from '../screens/app/offer/OfferViewScreen';
import FavoriteProductScreen from '../screens/app/home/FavoriteProductScreen';
import NotificationScreen from '../screens/app/home/NotificationScreen';
import NotificationOfferScreen from '../screens/app/home/NotificationOfferScreen';
import NotificationFeedScreen from '../screens/app/home/NotificationFeedScreen';
import NotificationActivityScreen from '../screens/app/home/NotificationActivityScreen';
import ProfileScreen from '../screens/app/account/ProfileScreen';
import ChangeNameScreen from '../screens/app/account/ChangeNameScreen';
import ChangeGenderScreen from '../screens/app/account/ChangeGenderScreen';
import ChangeBirthdayScreen from '../screens/app/account/ChangeBirthdayScreen';
import ChangeEmailScreen from '../screens/app/account/ChangeEmailScreen';
import ChangePhoneScreen from '../screens/app/account/ChangePhoneScreen';
import ChangePasswordScreen from '../screens/app/account/ChangePasswordScreen';
import OrderScreen from '../screens/app/account/OrderScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: BackgroundColor.WhiteColor
    },
};

function RoutesApp() {
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
                    name="ForgotPasswordScreen"
                    component={ForgotPassword}
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
                <Stack.Screen
                    name="OrderScreen"
                    component={OrderScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RoutesApp;