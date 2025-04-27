import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFNavigation} from '@components';
import {BackgroundColor} from '@constants';
import translate from '@translations/i18n';

function CartScreen() {
  return (
    <View style={styles.cartContainer}>
      <LFNavigation.Header name={translate('resources:your_cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
});

export default memo(CartScreen);
