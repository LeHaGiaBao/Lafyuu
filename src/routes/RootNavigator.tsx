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
import NotificationOffer from '@screens/main/Notification/NotificationOffer';
import NotificationFeed from '@screens/main/Notification/NotificationFeed';
import NotificationActivity from '@screens/main/Notification/NotificationActivity';
import MyProfile from '@screens/main/Profile/MyProfile';
import MyName from '@screens/main/Profile/MyName';
import MyGender from '@screens/main/Profile/MyGender';
import MyBirthday from '@screens/main/Profile/MyBirthday';
import MyEmail from '@screens/main/Profile/MyEmail';
import MyPhone from '@screens/main/Profile/MyPhone';
import MyPassword from '@screens/main/Profile/MyPassword';
import MyPayment from '@screens/main/Payment/MyPayment';

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
      <Stack.Screen
        name={Routes.notificationOffer}
        component={NotificationOffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationFeed}
        component={NotificationFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationActivity}
        component={NotificationActivity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myProfile}
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myName}
        component={MyName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myGender}
        component={MyGender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myBirthday}
        component={MyBirthday}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myEmail}
        component={MyEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPhone}
        component={MyPhone}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPassword}
        component={MyPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPayment}
        component={MyPayment}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default memo(RootNavigator);
