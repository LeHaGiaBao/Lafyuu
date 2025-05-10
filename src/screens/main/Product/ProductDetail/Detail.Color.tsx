import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {PRODUCT_DETAIL_COLOR} from '@database';
import translate from '@translations/i18n';

interface Props {
  selectedColor: number;
  onColorChange: (size: number) => void;
}

function DetailColor(props: Props) {
  const {selectedColor, onColorChange} = props;

  const handleSelectItem = useCallback(
    (index: number) => {
      onColorChange(index);
    },
    [onColorChange],
  );

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      const {color} = item;

      const isActive = selectedColor === item.id;

      return (
        <TouchableOpacity
          onPress={() => handleSelectItem(item.id)}
          style={[styles.item, {backgroundColor: color}]}>
          {isActive && <View style={styles.chooseItem} />}
        </TouchableOpacity>
      );
    },
    [selectedColor, handleSelectItem],
  );

  const keyExtractor = useCallback((item: any) => item.id, []);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:select_color')}
        </LFText.Text>
      </View>

      <FlatList
        data={PRODUCT_DETAIL_COLOR}
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
    marginTop: 8,
    marginHorizontal: 16,
    display: 'flex',
  },
  list: {
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 8,
  },
  item: {
    height: 48,
    width: 48,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseItem: {
    height: 16,
    width: 16,
    borderRadius: 100,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(DetailColor);
