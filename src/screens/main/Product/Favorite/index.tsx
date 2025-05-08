/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {LFNavigation, LFProductCard, LFProductCardProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {FAVORITE_PRODUCT} from '@database';
import translate from '@translations/i18n';

function Favorite() {
  const keyExtractor = useCallback(
    (item: LFProductCardProps) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item, index}: {item: LFProductCardProps; index: number}) => {
      const {
        id,
        image,
        name,
        rating,
        price,
        discountPrice,
        percentage,
        isFavorite,
      } = item;

      const isLeft = index % 2 === 0;

      return (
        <View
          style={{
            paddingLeft: isLeft ? 16 : 8,
            paddingRight: isLeft ? 8 : 16,
            paddingBottom: 16,
          }}>
          <LFProductCard.NormalCard
            id={id}
            image={image}
            name={name}
            rating={rating}
            price={price}
            discountPrice={discountPrice}
            percentage={percentage}
            isFavorite={isFavorite}
          />
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.favoriteContainer}>
      <FlashList
        data={FAVORITE_PRODUCT}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={100}
        numColumns={2}
        contentContainerStyle={styles.containerList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <LFNavigation.HeaderCanGoBack
              name={translate('navigation:favorite')}
            />
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  containerList: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  rightNode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
});

export default memo(Favorite);
