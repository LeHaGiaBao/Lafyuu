import React, {memo, useCallback, useMemo, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  LFButton,
  LFForm,
  LFHorizontalCardProps,
  LFNavigation,
  LFProductCard,
  LFText,
} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import {CART_PRODUCT_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';
import {formatCurrencyUSD} from '@utils';
import {Routes} from '@routes/routes';

function CartScreen() {
  const [cuponCode, setCuponCode] = useState('');
  const nav = useLFNavigation();

  const goToCheckout = useCallback(() => {
    nav.navigate(Routes.shipTo);
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFHorizontalCardProps) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(({item}: {item: LFHorizontalCardProps}) => {
    const {id, image, name, price, isFavorite, numOfProduct, type} = item;

    return (
      <View style={styles.item}>
        <LFProductCard.HorizontalCard
          id={id}
          image={image}
          name={name}
          price={price}
          isFavorite={isFavorite}
          numOfProduct={numOfProduct}
          type={type}
        />
      </View>
    );
  }, []);

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.headerContainer}>
        <LFNavigation.Header name={translate('resources:your_cart')} />
      </View>
    );
  }, []);

  const renderFooter = useMemo(() => {
    return (
      <View>
        <View style={styles.cuponContainer}>
          <LFForm.CuponInput
            placeholder={translate('resources:enter_cupon_code')}
            value={cuponCode}
            onChangeText={setCuponCode}
          />
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:items') + ` (${CART_PRODUCT_LIST.length})`}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {formatCurrencyUSD(
                CART_PRODUCT_LIST.reduce((acc, item) => acc + item.price, 0),
              )}
            </LFText.Text>
          </View>

          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:shipping')}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {formatCurrencyUSD(40.0)}
            </LFText.Text>
          </View>

          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:import_charges')}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {formatCurrencyUSD(128.0)}
            </LFText.Text>
          </View>

          <View style={styles.priceLine} />

          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.DarkColor}>
              {translate('resources:total_price')}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={PrimaryColor.BlueColor}>
              {formatCurrencyUSD(
                CART_PRODUCT_LIST.reduce((acc, item) => acc + item.price, 0) +
                  40.0 +
                  128.0,
              )}
            </LFText.Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <LFButton.Button
            onPress={goToCheckout}
            title={translate('resources:check_out')}
            type="Primary"
            size="Large"
          />
        </View>
      </View>
    );
  }, [cuponCode, goToCheckout]);

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={CART_PRODUCT_LIST}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  containerList: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  headerContainer: {
    marginBottom: 16,
  },
  cuponContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    display: 'flex',
    gap: 16,
  },
  item: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    margin: 16,
    marginBottom: Devices.bottomButton + 16,
  },
  priceContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    display: 'flex',
    gap: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  priceItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLine: {
    height: 1,
    backgroundColor: NeutralColor.LightColor,
    borderStyle: 'dotted',
    borderWidth: 0.1,
  },
});

export default memo(CartScreen);
