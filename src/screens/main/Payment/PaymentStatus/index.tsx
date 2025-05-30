import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFButton, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';
import {Routes} from '@routes/routes';

function PaymentStatus() {
  const nav = useLFNavigation();

  const confirmDelete = useCallback(() => {
    nav.reset({
      index: 0,
      routes: [{name: Routes.appScreen}],
    });
  }, [nav]);

  return (
    <View style={styles.paymentStatusContainer}>
      <LFIcon.Icon icon="success" size={150} />

      <LFText.Text typo="H2" color={NeutralColor.DarkColor}>
        {translate('resources:success')}
      </LFText.Text>

      <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
        {translate('resources:success_description')}
      </LFText.Text>

      <LFButton.Button
        onPress={confirmDelete}
        title={translate('resources:back_to_order')}
        type="Primary"
        size="Large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paymentStatusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.WhiteColor,
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default memo(PaymentStatus);
