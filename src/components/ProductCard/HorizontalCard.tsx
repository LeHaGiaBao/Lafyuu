import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';
import {LFButton, LFHorizontalCardProps, LFIcon, LFText} from '@components';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import {formatCurrencyUSD} from '@utils';

const LFHorizontalCard = (props: LFHorizontalCardProps) => {
  const {
    image,
    name,
    price,
    isFavorite = false,
    numOfProduct = 1,
    type = 'Cart',
    ...rest
  } = props;

  const nav = useLFNavigation();

  const handleNavigateProductDetail = useCallback(() => {
    nav.navigate(Routes.productDetail, {
      name: name,
    });
  }, [name, nav]);

  return (
    <TouchableOpacity
      style={cardStyles.container}
      onPress={handleNavigateProductDetail}
      {...rest}>
      <View style={cardStyles.imageContainer}>
        <Image source={image} style={cardStyles.image} />
      </View>

      <View style={cardStyles.contentContainer}>
        <View style={cardStyles.topContainer}>
          <View style={cardStyles.topTextContainer}>
            <LFText.Text
              typo="H6"
              color={NeutralColor.DarkColor}
              numberOfLines={2}>
              {name}
            </LFText.Text>
          </View>

          <View style={cardStyles.topButtonContainer}>
            <TouchableOpacity>
              <LFIcon.Icon icon={isFavorite ? 'love-e' : 'love'} size={24} />
            </TouchableOpacity>

            {type === 'Cart' ? (
              <TouchableOpacity>
                <LFIcon.Icon icon="trash" size={24} />
              </TouchableOpacity>
            ) : undefined}
          </View>
        </View>

        <View style={cardStyles.bottomContainer}>
          <LFText.Text
            typo="H6"
            color={PrimaryColor.BlueColor}
            numberOfLines={2}>
            {formatCurrencyUSD(price ?? 0)}
          </LFText.Text>

          {type === 'Cart' ? (
            <LFButton.ButtonNumber number={numOfProduct} />
          ) : undefined}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  imageContainer: {
    flex: 0.2,
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 0.8,
    height: 72,
    gap: 16,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  topTextContainer: {
    flex: 0.8,
  },
  topButtonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(LFHorizontalCard);
