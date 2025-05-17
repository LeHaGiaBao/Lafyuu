import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFOrderItemProps, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';
import {formatCurrencyUSD} from '@utils';
import {Routes} from '@routes/routes';

const LFOrderItem = (props: LFOrderItemProps) => {
  const {orderCode, date, status, numberOfItems, totalPrice, ...rest} = props;
  const nav = useLFNavigation();

  const goToOrderDetail = useCallback(() => {
    nav.navigate(Routes.orderDetail);
  }, [nav]);

  return (
    <TouchableOpacity
      style={orderItemStyles.container}
      onPress={goToOrderDetail}
      {...rest}>
      <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
        {orderCode}
      </LFText.Text>

      <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
        {translate('resources:order_at_lafyuu') + ': ' + date}
      </LFText.Text>

      <View style={orderItemStyles.line} />

      <View style={orderItemStyles.formItem}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {translate('resources:order_status')}
        </LFText.Text>

        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.DarkColor}>
          {status}
        </LFText.Text>
      </View>

      <View style={orderItemStyles.formItem}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {translate('resources:items')}
        </LFText.Text>

        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.DarkColor}>
          {numberOfItems + ' ' + translate('resources:item_purchased')}
        </LFText.Text>
      </View>

      <View style={orderItemStyles.formItem}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {translate('resources:price')}
        </LFText.Text>

        <LFText.Text typo="BodyNormalRegular" color={PrimaryColor.BlueColor}>
          {formatCurrencyUSD(totalPrice)}
        </LFText.Text>
      </View>
    </TouchableOpacity>
  );
};

const orderItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
  },
  line: {
    height: 1,
    backgroundColor: NeutralColor.LightColor,
    borderStyle: 'dotted',
    borderWidth: 0.1,
  },
  formItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(LFOrderItem);
