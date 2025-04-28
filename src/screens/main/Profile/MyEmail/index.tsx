import React, {memo, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

interface MyEmailFormInputs {
  email: string;
}

function MyEmail() {
  const nav = useLFNavigation();
  const params = (useLFNavigationParams() as {navigationParam?: string}) || {};
  const email = params as string;

  const {control, handleSubmit} = useForm<MyEmailFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.myEmailContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:my_profile:email')}
        />
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:change_email')}
          </LFText.Text>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value = email, onBlur}}) => (
              <LFForm.Input
                value={value}
                type="Email"
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <LFText.Text typo="BodyNormalRegular" color={PrimaryColor.BlueColor}>
            {translate('resources:change_email_confirm')}
          </LFText.Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleSave)}
          title={translate('resources:change_email')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  myEmailContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
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
    bottom: Devices.bottomButton,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});

export default memo(MyEmail);
