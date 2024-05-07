import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/app/tab/HomeScreen';
import ExploreScreen from '../../screens/app/tab/ExploreScreen';
import CartScreen from '../../screens/app/tab/CartScreen';
import OfferScreen from '../../screens/app/tab/OfferScreen';
import AccountScreen from '../../screens/app/tab/AccountScreen';
import { accountIcon, cartIcon, exploreIcon, homeIcon, offerIcon } from '../../assets';

const Tab = createBottomTabNavigator();

function NavigationBar({ badgeCount }: any) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    borderTopColor: '#EBF0FF',
                    marginBottom: 20,
                    paddingTop: 16,
                    backgroundColor: '#FFF',
                    borderTopWidth: 1,
                    height: 100,
                },
                tabBarActiveTintColor: '#40BFFF',
                tabBarInactiveTintColor: '#9098B1',
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Bold',
                    fontSize: 10,
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? homeIcon.homeIconFocus
                            : homeIcon.homeIcon
                    } else if (route.name === 'Explore') {
                        iconName = focused
                            ? exploreIcon.exploreIconFocus
                            : exploreIcon.exploreIcon
                    } else if (route.name === 'Cart') {
                        iconName = focused
                            ? cartIcon.cartIconFocus
                            : cartIcon.cartIcon
                    } else if (route.name === 'Offer') {
                        iconName = focused
                            ? offerIcon.offerIconFocus
                            : offerIcon.offerIcon
                    } else if (route.name === 'Account') {
                        iconName = focused
                            ? accountIcon.accountIconFocus
                            : accountIcon.accountIcon
                    }

                    return <Image source={iconName} style={{ width: 27, height: 27 }} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: badgeCount > 0 ? badgeCount.toString() : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: '#FB7181',
                        color: '#FFF',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 10,
                    }
                }}
            />
            <Tab.Screen
                name="Offer"
                component={OfferScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default NavigationBar;