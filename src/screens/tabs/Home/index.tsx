import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundColor} from '@/constants';
import HomeHeader from './Home.Header';

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 70,
  },
});

export default memo(HomeScreen);
