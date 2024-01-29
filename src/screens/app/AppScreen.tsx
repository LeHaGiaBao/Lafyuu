import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import CartScreen from './CartScreen';
import OfferScreen from './OfferScreen';
import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator();

function AppScreen(): React.JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    borderTopColor: '#EBF0FF',
                    marginBottom: 20,
                    backgroundColor: '#FFF',
                    borderTopWidth: 1,
                    height: 93,
                },
                tabBarActiveTintColor: '#40BFFF',
                tabBarInactiveTintColor: '#9098B1',
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Bold',
                    fontSize: 10,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="shopping-cart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Offer"
                component={OfferScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="tago" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppScreen;