import React, {memo} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Typography} from '@/components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@/constants';
import translate from '@/translation/i18n';

function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screen}>
      <View style={styles.logoContainer}>
        <Icon icon={'icon'} size={32} />
      </View>
      <View style={styles.title}>
        <Typography
          text={translate('resources:login_title')}
          type="Heading"
          size="H4"
          fontFamily="Bold"
          color="Dark"
        />
        <Typography
          text={translate('resources:login_sub_title')}
          type="Text"
          size="Normal"
          fontFamily="Regular"
          color="Grey"
        />
      </View>
      <View style={styles.formInput}>
        <Input
          placeholder={translate('resources:email_placeholder')}
          type="Email"
          errorText={translate('resources:email_validate')}
        />
        <Input
          placeholder={translate('resources:password_placeholder')}
          type="Password"
          errorText={translate('resources:password_validate')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={translate('resources:sign_in')}
          type="Primary"
          size="Large"
        />
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Typography
          text={translate('resources:or')}
          type="Heading"
          size="H5"
          fontFamily="Bold"
          color="Grey"
        />
        <View style={styles.line} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={translate('resources:sign_in_with_google')}
          type="Secondary"
          size="Large"
          icon="google"
        />
        <Button
          title={translate('resources:sign_in_with_facebook')}
          type="Secondary"
          size="Large"
          icon="facebook"
        />
      </View>
      <View style={styles.title}>
        <Typography
          text={translate('resources:forgot_password')}
          type="Text"
          size="Normal"
          fontFamily="Bold"
          color="Blue"
        />
        <View style={styles.createAccount}>
          <Typography
            text={translate('resources:not_have_account')}
            type="Text"
            size="Normal"
            fontFamily="Regular"
            color="Grey"
          />
          <Typography
            text={translate('resources:register')}
            type="Text"
            size="Normal"
            fontFamily="Bold"
            color="Blue"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.WhiteColor,
  },
  logoContainer: {
    height: 72,
    width: 72,
    borderRadius: 16,
    backgroundColor: PrimaryColor.BlueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    marginTop: 28,
    display: 'flex',
    gap: 8,
    marginHorizontal: 32,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  orContainer: {
    marginTop: 21,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 28,
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: NeutralColor.LightColor,
  },
  createAccount: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default memo(LoginScreen);
