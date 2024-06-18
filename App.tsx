import Routes from '@/routes';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';

enableFreeze(true);

function App() {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <Routes />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
