import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {LFNavigation, LFNavigationItemProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {CATEGORY_LIST} from '@database';
import translate from '@translations/i18n';

function CategoryList() {
  const keyExtractor = useCallback(
    (item: LFNavigationItemProps) => item.route,
    [],
  );

  const renderItem = useCallback(({item}: {item: LFNavigationItemProps}) => {
    const {route, name, icon, ...rest} = item;

    return (
      <LFNavigation.NavigationItem
        route={route}
        name={name}
        icon={icon}
        {...rest}
      />
    );
  }, []);

  return (
    <FlatList
      data={CATEGORY_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.categoryContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:category')}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
});

export default memo(CategoryList);
