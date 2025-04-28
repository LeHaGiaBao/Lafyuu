import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFNavigation, LFCardProps, LFCard, LFButton} from '@components';
import {BackgroundColor} from '@constants';
import {MY_CARD_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function MyCard() {
  const nav = useLFNavigation();

  const goToAddNewCard = useCallback(() => {
    nav.navigate(Routes.addNewCard);
  }, [nav]);

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
    <>
      <FlatList
        data={MY_CARD_LIST}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.myCardContainer}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <LFNavigation.HeaderCanGoBack
                name={translate('navigation:my_payment:card')}
              />
            </View>
          </>
        }
      />
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={goToAddNewCard}
          title={translate('resources:add_card')}
          type="Primary"
          size="Large"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  myCardContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
  header: {
    marginBottom: 8,
  },
  cardItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: 35,
  },
});

export default memo(MyCard);
