import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {BackgroundColor} from '@constants';
import HomeHeader from './Home.Header';

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
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 77,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(HomeScreen);
