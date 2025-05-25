import React, {memo, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {BackgroundColor, Devices} from '@constants';
import SearchHeader from './Search.Header';
import SearchFilter from './Search.Filter';
import SearchNotFound from './Search.NotFound';

function SearchResult() {
  const [text, setText] = useState('');
  const result = useRef<Array<any>>([]);

  return (
    <View style={styles.searchContainer}>
      <SearchHeader text={text} setText={setText} />
      <SearchFilter result={result.current} />
      <SearchNotFound />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
});

export default memo(SearchResult);
