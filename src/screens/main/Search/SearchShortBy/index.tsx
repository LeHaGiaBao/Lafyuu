import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {LFNavigation, LFNavigationItemProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {SEARCH_SHORT_BY_LIST} from '@database';
import translate from '@translations/i18n';

function SearchShortBy() {
  const keyExtractor = useCallback(
    (item: LFNavigationItemProps) => item.route,
    [],
  );

  const renderItem = useCallback(({item}: {item: LFNavigationItemProps}) => {
    const {route, name, isGoBack, ...rest} = item;

    return (
      <LFNavigation.NavigationItem
        route={route}
        name={name}
        isGoBack={isGoBack}
        {...rest}
      />
    );
  }, []);

  return (
    <FlatList
      data={SEARCH_SHORT_BY_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.shortByContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('resources:short_by')}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  shortByContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
});

export default memo(SearchShortBy);
