import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundColor} from '@constants';
import {LFNavigation} from '@components';
import translate from '@translations/i18n';

function OfferScreen() {
  return (
    <View style={styles.offerContainer}>
      <LFNavigation.Header name={translate('navigation:offer')} />
    </View>
  );
}

const styles = StyleSheet.create({
  offerContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
});

export default memo(OfferScreen);
