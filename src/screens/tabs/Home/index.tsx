/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {LFProductCard, LFProductCardProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {HOME_DATA} from '@database';
import HomeHeader from './Home.Header';
import HomeBanner from './Home.Banner';
import HomeCategory from './Home.Category';
import HomeFlashsale from './Home.Flashsale';
import HomeMegasale from './Home.Megasale';
import HomeRecommend from './Home.Recommend';

function HomeScreen() {
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
      data={HOME_DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
      numColumns={2}
      contentContainerStyle={styles.homeContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <HomeHeader />
          <HomeBanner />
          <HomeCategory />
          <HomeFlashsale />
          <HomeMegasale />
          <HomeRecommend />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(HomeScreen);
