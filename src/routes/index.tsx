import React, {memo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {AuthProvider, useAuth} from '@contexts';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

function MainRoutesContent() {
  const {isAuthenticated} = useAuth();

  const onReady = useCallback(() => {
    BootSplash.hide();
  }, []);

  return (
    <NavigationContainer onReady={onReady}>
      {!isAuthenticated ? <AuthNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
}

function MainRoutes() {
  return (
    <AuthProvider>
      <MainRoutesContent />
    </AuthProvider>
  );
}

export default memo(MainRoutes);
