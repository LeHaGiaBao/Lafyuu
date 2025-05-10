import React, {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';
import {PRODUCT_DETAIL_SIZE} from '@database';
import translate from '@translations/i18n';

function DetailSize() {
  const [defaultItem, setDefaultItem] = useState(0);

  const handleSelectItem = useCallback((index: number) => {
    setDefaultItem(index);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      const {name} = item;

      const borderColor =
        defaultItem === item.id
          ? PrimaryColor.BlueColor
          : NeutralColor.LightColor;

      return (
        <TouchableOpacity
          onPress={() => handleSelectItem(item.id)}
          style={[styles.item, {borderColor}]}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {name}
          </LFText.Text>
        </TouchableOpacity>
      );
    },
    [defaultItem, handleSelectItem],
  );

  const keyExtractor = useCallback((item: any) => item.id, []);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:select_size')}
        </LFText.Text>
      </View>

      <FlatList
        data={PRODUCT_DETAIL_SIZE}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={keyExtractor}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    marginBlock: 12,
    marginHorizontal: 16,
    display: 'flex',
  },
  list: {
    marginBottom: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 8,
  },
  item: {
    height: 48,
    width: 48,
    borderWidth: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(DetailSize);
