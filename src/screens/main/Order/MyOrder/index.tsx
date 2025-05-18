import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFNavigation, LFOrder, LFOrderItemProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {MY_ORDER_LIST} from '@database';
import translate from '@translations/i18n';

function MyOrder() {
  const keyExtractor = useCallback(
    (item: LFOrderItemProps) => item?.orderCode,
    [],
  );

  const renderItem = useCallback(({item}: {item: LFOrderItemProps}) => {
    const {id, orderCode, date, status, numberOfItems, totalPrice} = item;

    return (
      <View style={styles.item}>
        <LFOrder.OrderItem
          id={id}
          orderCode={orderCode}
          date={date}
          status={status}
          numberOfItems={numberOfItems}
          totalPrice={totalPrice}
        />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={MY_ORDER_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.orderContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack name={translate('navigation:order')} />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  item: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default memo(MyOrder);
