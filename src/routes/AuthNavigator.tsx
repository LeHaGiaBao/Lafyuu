import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import Login from '@screens/auth/Login';
import Register from '@screens/auth/Register';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.loginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.registerScreen}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default memo(AuthNavigator);
