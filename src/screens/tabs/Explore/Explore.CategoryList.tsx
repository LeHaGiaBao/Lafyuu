import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFCategory, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {LFCategoryItemProps} from '@components/types';

interface CategoryListProps {
  categoryName: string;
  data: LFCategoryItemProps[];
}

function CategoryList(props: CategoryListProps) {
  const {categoryName, data} = props;

  const keyExtractor = useCallback(
    (item: LFCategoryItemProps) => item.name,
    [],
  );

  const renderItem = useCallback(({item}: {item: LFCategoryItemProps}) => {
    const {name, icon} = item;

    return <LFCategory.CategoryItem name={name} icon={icon} />;
  }, []);

  return (
    <View style={styles.container}>
      <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
        {categoryName}
      </LFText.Text>
      <FlatList
        data={data}
        numColumns={4}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  columnWrapper: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    gap: (Devices.width - 312) / 3,
  },
});

export default memo(CategoryList);
