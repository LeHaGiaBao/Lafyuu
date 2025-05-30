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
import {SUPER_FLASH_SALE} from '@database';
import translate from '@translations/i18n';
import FlashsaleBanner from './Flashsale.Banner';

function Flashsale() {
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
    <View style={styles.flashsaleContainer}>
      <FlashList
        data={SUPER_FLASH_SALE}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={100}
        numColumns={2}
        contentContainerStyle={styles.containerList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <LFNavigation.HeaderCanGoBack
              name={translate('navigation:super_flash_sale')}
              rightNode={headerRightNode}
            />
            <FlashsaleBanner />
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flashsaleContainer: {
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

export default memo(Flashsale);
