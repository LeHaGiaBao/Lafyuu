import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFCategory, LFCategoryItemProps, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {CATEGORY_DATA} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function HomeCategory() {
  const nav = useLFNavigation();

  const goToCategoryList = useCallback(() => {
    nav.navigate(Routes.categoryList);
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFCategoryItemProps) => item.name,
    [],
  );

  const renderItem = useCallback(({item}: {item: LFCategoryItemProps}) => {
    const {name, icon} = item;

    return <LFCategory.CategoryItem name={name} icon={icon} />;
  }, []);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:category')}
        </LFText.Text>

        <LFText.Text
          typo="H4"
          color={PrimaryColor.BlueColor}
          onPress={goToCategoryList}>
          {translate('resources:more_category')}
        </LFText.Text>
      </View>

      <FlatList
        horizontal
        data={CATEGORY_DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryList: {
    marginBottom: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 12,
  },
});

export default memo(HomeCategory);
