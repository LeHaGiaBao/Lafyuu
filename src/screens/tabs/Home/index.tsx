import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundColor} from '@constants';
import {LFForm} from '@components/UIKits';

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <View />
      <LFForm.SearchInput isActive />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingHorizontal: 16,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(HomeScreen);
