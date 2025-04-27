import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import AppScreen from './AppScreen';
import Home from '@screens/tabs/Home';
import Explore from '@screens/tabs/Explore';
import Cart from '@screens/tabs/Cart';
import Offer from '@screens/tabs/Offer';
import Account from '@screens/tabs/Account';
import NotificationList from '@screens/main/Notification/NotificationList';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.appScreen}
        component={AppScreen}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
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
      <Stack.Screen
        name={Routes.notificationList}
        component={NotificationList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default memo(RootNavigator);
