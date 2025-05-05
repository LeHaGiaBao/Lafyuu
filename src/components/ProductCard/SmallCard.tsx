import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFProductCardProps, LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';
import translate from '@translations/i18n';
import {formatCurrencyUSD} from '@utils';

const LFSmallCard = (props: LFProductCardProps) => {
  const {image, name, price, discountPrice, percentage, ...rest} = props;

  const handleNavigateProductDetail = useCallback(() => {}, []);

  return (
    <TouchableOpacity
      style={cardStyles.container}
      onPress={handleNavigateProductDetail}
      {...rest}>
      <Image source={image} style={cardStyles.image} />
      <LFText.Text typo="H6" color={NeutralColor.DarkColor} numberOfLines={2}>
        {name}
      </LFText.Text>
      <LFText.Text
        typo="BodyNormalBold"
        color={PrimaryColor.BlueColor}
        numberOfLines={1}>
        {formatCurrencyUSD(price)}
      </LFText.Text>
      <View style={cardStyles.price}>
        <LFText.Text
          typo="CaptionNormalRegularLine"
          color={NeutralColor.GreyColor}
          numberOfLines={1}>
          {formatCurrencyUSD(discountPrice ?? 0)}
        </LFText.Text>
        <LFText.Text
          typo="CaptionNormalBold"
          color={PrimaryColor.RedColor}
          numberOfLines={1}>
          {String(percentage) + translate('resources:n_off')}
        </LFText.Text>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    width: 145,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 5,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});

export default memo(LFSmallCard);
