import React, {memo, useCallback} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LFButton, LFForm, LFIcon, LFText} from '@components';
import {Devices, NeutralColor, PrimaryColor} from '@constants';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';
import {loginSchema} from '@utils';
import {styles} from './styles';

interface LoginFormInputs {
  email: string;
  password: string;
}

function LoginScreen() {
  const nav = useLFNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const handleLogin = useCallback(() => {
    nav.navigate(Routes.appScreen);
  }, [nav]);

  const handleRegister = useCallback(() => {
    nav.navigate(Routes.registerScreen);
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.screen}>
      <View style={styles.logoContainer}>
        <LFIcon.Icon icon={'icon'} size={32} />
      </View>
      <View style={styles.title}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:login_title')}
        </LFText.Text>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {translate('resources:login_sub_title')}
        </LFText.Text>
      </View>
      <View style={styles.formInput}>
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
      </View>
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleLogin)}
          title={translate('resources:sign_in')}
          type="Primary"
          size="Large"
        />
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <LFText.Text typo="H5" color={NeutralColor.GreyColor}>
          {translate('resources:or')}
        </LFText.Text>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonContainer}>
        <LFButton.Button
          title={translate('resources:sign_in_with_google')}
          type="Secondary"
          size="Large"
          icon="google"
        />
        <LFButton.Button
          title={translate('resources:sign_in_with_facebook')}
          type="Secondary"
          size="Large"
          icon="facebook"
        />
      </View>
      <View style={styles.title}>
        <LFText.Text typo="BodyNormalBold" color={PrimaryColor.BlueColor}>
          {translate('resources:forgot_password')}
        </LFText.Text>
        <View style={styles.createAccount}>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            {translate('resources:not_have_account')}
          </LFText.Text>
          <TouchableOpacity onPress={handleRegister}>
            <LFText.Text typo="BodyNormalBold" color={PrimaryColor.BlueColor}>
              {translate('resources:register')}
            </LFText.Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default memo(LoginScreen);
