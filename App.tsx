/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/Icon/iconWelcome.png')}
          style={{
            height: 32,
            width: 32,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40BFFF',
  },
  logoContainer: {
    backgroundColor: '#FFF',
    height: 72,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});

export default App;
