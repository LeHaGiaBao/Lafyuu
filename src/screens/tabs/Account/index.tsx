import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {BackgroundColor} from '@constants';
import {LFNavigation, LFNavigationItemProps} from '@components';
import translate from '@translations/i18n';
import {ACCOUNT_LIST_ITEM} from '@database';

function AccountScreen() {
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
      data={ACCOUNT_LIST_ITEM}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.accountContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.Header name={translate('navigation:account')} />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
});

export default memo(AccountScreen);
