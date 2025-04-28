import React, {memo, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

interface NewCardFormInputs {
  cardNumber: string;
  date: string;
  code: string;
  cardHolder: string;
}

function AddNewCard() {
  const nav = useLFNavigation();

  const {control, handleSubmit} = useForm<NewCardFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.myCardContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <LFNavigation.HeaderCanGoBack name={translate('navigation:add_card')} />
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:add_card_form:card_number')}
          </LFText.Text>
          <Controller
            control={control}
            name="cardNumber"
            render={({field: {onChange, value, onBlur}}) => (
              <LFForm.Input
                value={value}
                type="Text"
                placeholder={translate(
                  'resources:add_card_form:card_number_placeholder',
                )}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </View>

        <View style={styles.flexForm}>
          <View style={styles.flexFormItem}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:add_card_form:expiration_date')}
            </LFText.Text>
            <Controller
              control={control}
              name="date"
              render={({field: {onChange, value, onBlur}}) => (
                <LFForm.Input
                  value={value}
                  type="Text"
                  placeholder={translate(
                    'resources:add_card_form:expiration_date_placeholder',
                  )}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View style={styles.flexFormItem}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:add_card_form:security_code')}
            </LFText.Text>
            <Controller
              control={control}
              name="code"
              render={({field: {onChange, value, onBlur}}) => (
                <LFForm.Input
                  value={value}
                  type="Text"
                  placeholder={translate(
                    'resources:add_card_form:security_code_placeholder',
                  )}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:add_card_form:card_holder')}
          </LFText.Text>
          <Controller
            control={control}
            name="cardNumber"
            render={({field: {onChange, value, onBlur}}) => (
              <LFForm.Input
                value={value}
                type="Text"
                placeholder={translate(
                  'resources:add_card_form:card_holder_placeholder',
                )}
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
          title={translate('resources:add_card')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  myCardContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  form: {
    display: 'flex',
    padding: 16,
    gap: 12,
  },
  flexForm: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexFormItem: {
    flex: 0.5,
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

export default memo(AddNewCard);
