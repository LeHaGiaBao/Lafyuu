/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LFIcon} from '@components/UIKits';
import {
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@constants';
import Home from '@screens/tabs/Home';
import Explore from '@screens/tabs/Explore';
import Cart from '@screens/tabs/Cart';
import Offer from '@screens/tabs/Offer';
import Account from '@screens/tabs/Account';
import translate from '@translations/i18n';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 100,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: NeutralColor.LightColor,
        },
        tabBarActiveTintColor: PrimaryColor.BlueColor,
        tabBarInactiveTintColor: NeutralColor.GreyColor,
        tabBarLabel: ({focused, color}) => (
          <Text
            style={{
              fontFamily: focused
                ? FontFamily.FontBold
                : FontFamily.FontRegular,
              fontSize: FontSize.FontSize10,
              letterSpacing: 0.5,
              lineHeight: FontSize.FontSize10 * LineHeight.LineHeight150,
              color: color,
              marginTop: 4,
            }}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen
        name={translate('navigation:home')}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <LFIcon.Icon icon={`${focused ? 'home-b' : 'home'}`} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={translate('navigation:explore')}
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <LFIcon.Icon
              icon={`${focused ? 'search-b' : 'search'}`}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={translate('navigation:cart')}
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <LFIcon.Icon icon={`${focused ? 'cart-b' : 'cart'}`} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={translate('navigation:offer')}
        component={Offer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <LFIcon.Icon icon={`${focused ? 'offer-b' : 'offer'}`} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={translate('navigation:account')}
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <LFIcon.Icon icon={`${focused ? 'user-b' : 'user'}`} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default memo(NavigationBar);
