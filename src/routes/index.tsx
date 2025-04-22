import React, {memo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import BootSplash from 'react-native-bootsplash';

function MainRoutes() {
  const onReady = useCallback(() => {
    BootSplash.hide();
  }, []);

  return (
    <NavigationContainer onReady={onReady}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default memo(MainRoutes);
