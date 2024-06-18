import React, {memo} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import RegisterScreen from '@/screens/auth/RegisterScreen';

// const Stack = createNativeStackNavigator();

function RoutesApp() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

export default memo(RoutesApp);
