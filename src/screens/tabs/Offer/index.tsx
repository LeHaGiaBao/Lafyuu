import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundColor} from '@constants';

function OfferScreen() {
  return (
    <View style={styles.homeContainer}>
      <View />
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

export default memo(OfferScreen);
