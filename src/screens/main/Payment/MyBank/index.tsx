import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFNavigation, LFCardProps, LFCard} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {MY_CARD_LIST} from '@database';
import translate from '@translations/i18n';

function MyBank() {
  const keyExtractor = useCallback(
    (item: LFCardProps) => item?.cardId?.toString() || '',
    [],
  );

  const renderItem = useCallback(({item}: {item: LFCardProps}) => {
    const {cardNumber, cardHolder, cardSave, backgroundColor, ...rest} = item;

    return (
      <View style={styles.cardItem}>
        <LFCard.Card
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardSave={cardSave}
          backgroundColor={backgroundColor}
          {...rest}
        />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={MY_CARD_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.myBankContainer}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <LFNavigation.HeaderCanGoBack
              name={translate('navigation:my_payment:bank')}
            />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  myBankContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  header: {
    marginBottom: 8,
  },
  cardItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default memo(MyBank);
