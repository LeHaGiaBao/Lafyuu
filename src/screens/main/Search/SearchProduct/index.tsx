import React, {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {SEARCH_PRODUCT_HISTORY_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import SearchHeader from './Search.Header';

function SearchProduct() {
  const nav = useLFNavigation();
  const [text, setText] = useState('');

  const goToSearchResult = useCallback(() => {
    nav.navigate(Routes.searchResult);
  }, [nav]);

  const keyExtractor = useCallback((item: any) => item.id, []);

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      const {name} = item;

      return (
        <TouchableOpacity style={styles.item} onPress={goToSearchResult}>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            {name}
          </LFText.Text>
        </TouchableOpacity>
      );
    },
    [goToSearchResult],
  );

  return (
    <FlatList
      data={SEARCH_PRODUCT_HISTORY_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.searchContainer}
      ListHeaderComponent={
        <>
          <SearchHeader text={text} setText={setText} />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  item: {
    padding: 16,
  },
});

export default memo(SearchProduct);
