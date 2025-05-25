/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {LFProductCard, LFProductCardProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {SEARCH_RESULT_DATA} from '@database';
import SearchHeader from './Search.Header';
import SearchFilter from './Search.Filter';
import SearchNotFound from './Search.NotFound';

function SearchResult() {
  const [text, setText] = useState('');

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

  const renderEmptyComponent = useCallback(() => {
    return <SearchNotFound />;
  }, []);

  const renderHeaderComponent = useCallback(() => {
    return (
      <>
        <SearchHeader text={text} setText={setText} />
        <SearchFilter result={SEARCH_RESULT_DATA} />
      </>
    );
  }, [text]);

  return (
    <View style={styles.searchContainer}>
      <FlashList
        data={SEARCH_RESULT_DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={100}
        numColumns={2}
        contentContainerStyle={styles.containerList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={renderHeaderComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  containerList: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(SearchResult);
