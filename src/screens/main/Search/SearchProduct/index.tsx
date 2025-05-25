import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BackgroundColor, Devices} from '@constants';
import SearchHeader from './Search.Header';

function SearchProduct() {
  const [text, setText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <SearchHeader text={text} setText={setText} />
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

export default memo(SearchProduct);
