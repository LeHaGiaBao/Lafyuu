import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {BackgroundColor, Devices} from '@constants';
import HomeHeader from './Home.Header';
import HomeBanner from './Home.Banner';

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
