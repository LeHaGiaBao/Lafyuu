import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFNavigation} from '@components';
import {BackgroundColor, Devices} from '@constants';
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
    paddingTop: Devices.headerTop,
  },
});

export default memo(OfferScreen);
