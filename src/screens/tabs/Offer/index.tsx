import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, PrimaryColor} from '@constants';
import translate from '@translations/i18n';
import OfferSuperFlashsale from './Offer.SuperFlashsale';
import OfferSuperMega from './Offer.SuperMega';

function OfferScreen() {
  return (
    <View style={styles.offerContainer}>
      <LFNavigation.Header name={translate('navigation:offer')} />
      <View style={styles.banner}>
        <LFText.Text
          typo="H4"
          color={BackgroundColor.WhiteColor}
          numberOfLines={2}>
          Use “MEGSL” Cupon For Get 90% off
        </LFText.Text>
      </View>
      <OfferSuperFlashsale />
      <OfferSuperMega />
    </View>
  );
}

const styles = StyleSheet.create({
  offerContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  banner: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: PrimaryColor.BlueColor,
    borderRadius: 5,
  },
});

export default memo(OfferScreen);
