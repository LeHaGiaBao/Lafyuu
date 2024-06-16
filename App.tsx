import {SearchInput} from '@/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';

enableFreeze(true);

function App() {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <View />
      <SearchInput placeholder="Search Product" isActive={true} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 16,
  },
});

export default App;
