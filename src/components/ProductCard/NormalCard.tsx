import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFProductCardProps, LFRating, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import translate from '@translations/i18n';
import {formatCurrencyUSD} from '@utils';

const IMAGE = (Devices.width - 112) / 2;

const LFNormalCard = (props: LFProductCardProps) => {
  const {
    image,
    name,
    rating,
    price,
    discountPrice,
    percentage,
    isFavorite,
    ...rest
  } = props;

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
      <View style={cardStyles.rating}>
        <LFRating.Star rating={rating ?? 0} />
      </View>

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

      {isFavorite ? (
        <TouchableOpacity style={cardStyles.favorite}>
          <LFIcon.Icon icon={'trash'} size={24} />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  image: {
    height: IMAGE,
    width: IMAGE,
    borderRadius: 5,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  rating: {
    marginBottom: 16,
  },
  favorite: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default memo(LFNormalCard);
