import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';
import {PRODUCT_DETAIL_SIZE} from '@database';
import translate from '@translations/i18n';

interface Props {
  selectedSize: number;
  onSizeChange: (size: number) => void;
}

function DetailSize(props: Props) {
  const {selectedSize, onSizeChange} = props;

  const handleSelectItem = useCallback(
    (index: number) => {
      onSizeChange(index);
    },
    [onSizeChange],
  );

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      const {name} = item;

      const borderColor =
        selectedSize === item.id
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
    [selectedSize, handleSelectItem],
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
    marginTop: 24,
    marginHorizontal: 16,
    display: 'flex',
  },
  list: {
    marginTop: 12,
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
