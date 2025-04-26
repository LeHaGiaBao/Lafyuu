import React, {memo} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LFButton, LFForm, LFIcon, LFText} from '@components';
import {Devices, NeutralColor, PrimaryColor} from '@constants';
import {useLFNavigation} from '@hooks/core';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';
import {registerSchema} from '@utils/validation';
import {styles} from './styles';

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
  rePassword: string;
}

function RegisterScreen() {
  const nav = useLFNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const handleRegister = () => {
    nav.navigate(Routes.appScreen);
  };

  const handleLogin = () => {
    nav.navigate(Routes.loginScreen);
  };

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.screen}>
      <View style={styles.logoContainer}>
        <LFIcon.Icon icon={'icon'} size={32} />
      </View>
      <View style={styles.title}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:get_started')}
        </LFText.Text>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {translate('resources:new_account')}
        </LFText.Text>
      </View>
      <View style={styles.formInput}>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={translate('resources:full_name_placeholder')}
              type="Account"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={translate('resources:email_placeholder')}
              type="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              errorText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={translate('resources:password_placeholder')}
              type="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              errorText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value, onBlur}}) => (
            <LFForm.Input
              value={value}
              placeholder={translate('resources:password_again_placeholder')}
              type="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              errorText={errors.rePassword?.message}
            />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleRegister)}
          title={translate('resources:sign_up')}
          type="Primary"
          size="Large"
        />
      </View>
      <View style={styles.title}>
        <View style={styles.createAccount}>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            {translate('resources:have_account')}
          </LFText.Text>
          <TouchableOpacity onPress={handleLogin}>
            <LFText.Text typo="BodyNormalBold" color={PrimaryColor.BlueColor}>
              {translate('resources:sign_in')}
            </LFText.Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default memo(RegisterScreen);
