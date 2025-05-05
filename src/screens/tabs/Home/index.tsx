import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {BackgroundColor, Devices} from '@constants';
import HomeHeader from './Home.Header';
import HomeBanner from './Home.Banner';
import HomeCategory from './Home.Category';
import HomeFlashsale from './Home.Flashsale';
import HomeMegasale from './Home.Megasale';
import HomeRecommend from './Home.Recommend';

function HomeScreen() {
  const renderItem = useCallback(() => {
    return <View />;
  }, []);

  return (
    <FlashList
      data={[]}
      renderItem={renderItem}
      estimatedItemSize={100}
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
