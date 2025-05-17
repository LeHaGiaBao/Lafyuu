import React, {memo, useCallback, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import {LFNavigation, LFCardProps, LFCard, LFButton, LFIcon} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import {MY_CARD_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function ChooseCard() {
  const nav = useLFNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const goToAddNewCard = useCallback(() => {
    nav.navigate(Routes.addNewCard);
  }, [nav]);

  const handleConfirmPay = useCallback(() => {
    nav.navigate(Routes.paymentStatus);
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
    <View style={styles.myCardContainer}>
      <View style={styles.header}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:choose_card')}
          rightNode={
            <TouchableOpacity onPress={goToAddNewCard}>
              <LFIcon.Icon icon="plus" size={24} />
            </TouchableOpacity>
          }
        />
      </View>

      <View>
        <FlatList
          ref={flatListRef}
          data={MY_CARD_LIST}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />

        <View style={styles.pagination}>
          {MY_CARD_LIST.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                {
                  backgroundColor:
                    index === currentIndex
                      ? PrimaryColor.BlueColor
                      : NeutralColor.LightColor,
                },
              ]}
              onPress={() => {
                flatListRef.current?.scrollToIndex({
                  index,
                  animated: true,
                });
              }}
            />
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleConfirmPay}
          title={translate('resources:pay')}
          type="Primary"
          size="Large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myCardContainer: {
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
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
  pagination: {
    marginTop: 16,
    marginBottom: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
  },
});

export default memo(ChooseCard);
