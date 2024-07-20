import {BackgroundColor} from '@/constants';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

function HomeScreen() {
  return <View style={styles.homeContainer} />;
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(HomeScreen);
