import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {GENDER} from '@database';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

function MyGender() {
  const nav = useLFNavigation();
  const params = (useLFNavigationParams() as {navigationParam?: string}) || {};
  const gender = params as string;

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.myGenderContainer}>
      <LFNavigation.HeaderCanGoBack
        name={translate('navigation:my_profile:gender')}
      />

      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:choose_gender')}
        </LFText.Text>

        <LFForm.Dropdown chooseData={gender} dropdownData={GENDER} />
      </View>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSave}
          title={translate('resources:save')}
          type="Primary"
          size="Large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myGenderContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
  form: {
    display: 'flex',
    padding: 16,
    gap: 12,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: 35,
  },
});

export default memo(MyGender);
