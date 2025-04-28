import React, {memo, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

interface MyPhoneFormInputs {
  phone: string;
}

function MyPhone() {
  const nav = useLFNavigation();
  const params = (useLFNavigationParams() as {navigationParam?: string}) || {};
  const phone = params as string;

  const {control, handleSubmit} = useForm<MyPhoneFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.myPhoneContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:my_profile:phone')}
        />
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('navigation:my_profile:phone')}
          </LFText.Text>
          <Controller
            control={control}
            name="phone"
            render={({field: {onChange, value = phone, onBlur}}) => (
              <LFForm.Input
                value={value}
                type="Phone"
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleSave)}
          title={translate('resources:save')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  myPhoneContainer: {
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

export default memo(MyPhone);
