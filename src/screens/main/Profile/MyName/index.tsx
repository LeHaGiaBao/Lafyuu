import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

interface MyNameFormInputs {
  firstName: string;
  lastName: string;
}

function MyName() {
  const nav = useLFNavigation();
  const params =
    (useLFNavigationParams() as {firstName?: string; lastName?: string}) || {};
  const firstName = params?.firstName ?? '';
  const lastName = params?.lastName ?? '';

  const {control, handleSubmit} = useForm<MyNameFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.myNameContainer}>
      <LFNavigation.HeaderCanGoBack
        name={translate('navigation:my_profile:name')}
      />
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:first_name')}
        </LFText.Text>
        <Controller
          control={control}
          name="firstName"
          render={({field: {onChange, value = firstName, onBlur}}) => (
            <LFForm.Input
              value={value}
              type="Text"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </View>
      <View style={styles.form}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:last_name')}
        </LFText.Text>
        <Controller
          control={control}
          name="lastName"
          render={({field: {onChange, value = lastName, onBlur}}) => (
            <LFForm.Input
              value={value}
              type="Text"
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
  myNameContainer: {
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

export default memo(MyName);
