import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

function MyBirthday() {
  const nav = useLFNavigation();
  const params = (useLFNavigationParams() as {navigationParam?: string}) || {};
  const navigationParam = params?.navigationParam ?? new Date(2000, 12, 12);
  const [birthday, setBirthday] = useState<Date | null>(
    navigationParam instanceof Date
      ? navigationParam
      : new Date(navigationParam),
  );

  const handleDateChange = (date: Date) => {
    setBirthday(date);
  };

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.myBirthdayContainer}>
      <LFNavigation.HeaderCanGoBack
        name={translate('navigation:my_profile:birthday')}
      />
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:your_birthday')}
        </LFText.Text>
        <LFForm.DatePicker value={birthday} onChange={handleDateChange} />
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
  myBirthdayContainer: {
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

export default memo(MyBirthday);
