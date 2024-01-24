/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line prettier/prettier
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaView style={styles.fontFamilyApp}>
        <Text>Hello World</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  fontFamilyApp: {
    fontFamily: 'Poppins-Regular'
  },
});

export default App;
