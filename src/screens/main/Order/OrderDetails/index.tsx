/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  LFButton,
  LFHorizontalCardProps,
  LFNavigation,
  LFOrder,
  LFProductCard,
  LFText,
} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import {MY_ORDER_PROCESS_STEPS, ORDER_DETAIL_PRODUCT_LIST} from '@database';
import translate from '@translations/i18n';
import {formatCurrencyUSD} from '@utils';

function OrderDetails() {
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
      <>
        <View style={styles.headerContainer}>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:order_detail')}
          />
        </View>

        <LFOrder.OrderProcess steps={MY_ORDER_PROCESS_STEPS} />

        <View style={[styles.titleContainer, {marginBottom: 16}]}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:product')}
          </LFText.Text>
        </View>
      </>
    );
  }, []);

  const renderShippingDetails = useMemo(() => {
    return (
      <>
        <View style={styles.titleContainer}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:shipping_details')}
          </LFText.Text>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:date_shipping')}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.DarkColor}>
              January 16, 2015
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
              color={NeutralColor.DarkColor}>
              POS Reggular
            </LFText.Text>
          </View>

          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:resi')}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.DarkColor}>
              000192848573
            </LFText.Text>
          </View>

          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:address')}
            </LFText.Text>

            <View style={styles.addressContainer}>
              <LFText.Text
                typo="BodyNormalRegular"
                color={NeutralColor.DarkColor}
                numberOfLines={3}>
                2727 Lakeshore Rd undefined Nampa, Tennessee 78410
              </LFText.Text>
            </View>
          </View>
        </View>
      </>
    );
  }, []);

  const renderPaymentDetails = useMemo(() => {
    return (
      <>
        <View style={styles.titleContainer}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:payment_details')}
          </LFText.Text>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceItem}>
            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {translate('resources:items') +
                ` (${ORDER_DETAIL_PRODUCT_LIST.length})`}
            </LFText.Text>

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.DarkColor}>
              {formatCurrencyUSD(
                ORDER_DETAIL_PRODUCT_LIST.reduce(
                  (acc, item) => acc + item.price,
                  0,
                ),
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
              color={NeutralColor.DarkColor}>
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
              color={NeutralColor.DarkColor}>
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
                ORDER_DETAIL_PRODUCT_LIST.reduce(
                  (acc, item) => acc + item.price,
                  0,
                ) +
                  40.0 +
                  128.0,
              )}
            </LFText.Text>
          </View>
        </View>
      </>
    );
  }, []);

  const renderFooter = useMemo(() => {
    return (
      <View>
        {renderShippingDetails}
        {renderPaymentDetails}
        <View style={styles.buttonContainer}>
          <LFButton.Button
            title={translate('resources:notify_me')}
            type="Primary"
            size="Large"
          />
        </View>
      </View>
    );
  }, [renderShippingDetails, renderPaymentDetails]);

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={ORDER_DETAIL_PRODUCT_LIST}
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
  titleContainer: {
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
  addressContainer: {
    width: '50%',
    textAlign: 'right',
  },
});

export default memo(OrderDetails);
