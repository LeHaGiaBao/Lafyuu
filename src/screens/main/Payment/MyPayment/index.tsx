import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {LFNavigation, LFNavigationItemProps} from '@components';
import {BackgroundColor} from '@constants';
import {MY_PAYMENT_ITEM} from '@database';
import translate from '@translations/i18n';

function MyPayment() {
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
      data={MY_PAYMENT_ITEM}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.paymentContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:account_list:payment')}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
});

export default memo(MyPayment);
