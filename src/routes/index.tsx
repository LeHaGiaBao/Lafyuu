import React, {memo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

function MainRoutes() {
  const onReady = useCallback(() => {
    BootSplash.hide();
  }, []);

  return (
    <NavigationContainer onReady={onReady}>
      {false ? <AuthNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
}

export default memo(MainRoutes);
