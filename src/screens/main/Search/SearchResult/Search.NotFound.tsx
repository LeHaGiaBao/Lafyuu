import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFButton, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';
import {Routes} from '@routes/routes';

function SearchNotFound() {
  const nav = useLFNavigation();

  const backToHome = useCallback(() => {
    nav.reset({
      index: 0,
      routes: [{name: Routes.appScreen}],
    });
  }, [nav]);

  return (
    <View style={styles.notFoundContainer}>
      <LFIcon.Icon icon="success" size={150} />

      <LFText.Text typo="H2" color={NeutralColor.DarkColor}>
        {translate('resources:product_not_found')}
      </LFText.Text>

      <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
        {translate('resources:success_description')}
      </LFText.Text>

      <LFButton.Button
        onPress={backToHome}
        title={translate('resources:back_to_home')}
        type="Primary"
        size="Large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 72,
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default memo(SearchNotFound);
