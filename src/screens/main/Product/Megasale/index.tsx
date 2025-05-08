/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {
  LFIcon,
  LFNavigation,
  LFProductCard,
  LFProductCardProps,
} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {SUPER_MEGA_SALE} from '@database';
import translate from '@translations/i18n';
import MegasaleBanner from './Megasale.Banner';

function Megasale() {
  const headerRightNode = useMemo(() => {
    return (
      <View style={styles.rightNode}>
        <TouchableOpacity>
          <LFIcon.Icon icon="search" size={24} />
        </TouchableOpacity>
      </View>
    );
  }, []);

  const keyExtractor = useCallback(
    (item: LFProductCardProps) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item, index}: {item: LFProductCardProps; index: number}) => {
      const {id, image, name, rating, price, discountPrice, percentage} = item;

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
          />
        </View>
      );
    },
    [],
  );

  return (
    <FlashList
      data={SUPER_MEGA_SALE}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      contentContainerStyle={styles.megasaleContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:super_mega_sale')}
            rightNode={headerRightNode}
          />
          <MegasaleBanner />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  megasaleContainer: {
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

export default memo(Megasale);
