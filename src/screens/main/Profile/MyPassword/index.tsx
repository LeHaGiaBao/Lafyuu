import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

interface MyPasswordFormInputs {
  oldPassword: string;
  newPassword: string;
  newPasswordAgain: string;
}

function MyPassword() {
  const nav = useLFNavigation();
  const params = (useLFNavigationParams() as {navigationParam?: string}) || {};
  const passwordPlaceholder = params as string;

  const {control, handleSubmit} = useForm<MyPasswordFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.myPasswordContainer}>
      <LFNavigation.HeaderCanGoBack
        name={translate('navigation:my_profile:password')}
      />
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:old_password')}
        </LFText.Text>
        <Controller
          control={control}
          name="oldPassword"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={passwordPlaceholder}
              type="Password"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:new_password')}
        </LFText.Text>
        <Controller
          control={control}
          name="newPassword"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={passwordPlaceholder}
              type="Password"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:new_password_again')}
        </LFText.Text>
        <Controller
          control={control}
          name="newPasswordAgain"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={passwordPlaceholder}
              type="Password"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleSave)}
          title={translate('resources:save')}
          type="Primary"
          size="Large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myPasswordContainer: {
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

export default memo(MyPassword);
