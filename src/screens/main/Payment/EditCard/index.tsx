import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFCard, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';

interface NewCardFormInputs {
  cardNumber: string;
  date: string;
  code: string;
  cardHolder: string;
}

function EditCard() {
  const nav = useLFNavigation();
  const params =
    (useLFNavigationParams() as {
      cardNumber?: number;
      cardHolder?: string;
      cardSave?: string;
      backgroundColor?: string;
    }) || {};
  const cardNumber = params?.cardNumber ?? 0;
  const cardHolder = params?.cardHolder ?? '';
  const cardSave = params?.cardSave ?? '';
  const backgroundColor = params?.backgroundColor ?? '';

  const {control, handleSubmit} = useForm<NewCardFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <>
      <View style={styles.editCardContainer}>
        <LFNavigation.HeaderCanGoBack
          name={cardHolder + ' ' + translate('navigation:card')}
        />
        <View style={styles.card}>
          <LFCard.Card
            cardHolder={cardHolder}
            cardNumber={cardNumber}
            cardSave={cardSave}
            backgroundColor={backgroundColor}
          />
        </View>
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:add_card_form:card_number')}
          </LFText.Text>
          <Controller
            control={control}
            name="cardNumber"
            render={({
              field: {onChange, value = String(cardNumber), onBlur},
            }) => (
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
              render={({field: {onChange, value = cardSave, onBlur}}) => (
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
            render={({field: {onChange, value = cardHolder, onBlur}}) => (
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

        <View style={styles.buttonContainer}>
          <LFButton.Button
            onPress={handleSubmit(handleSave)}
            title={translate('resources:save')}
            type="Primary"
            size="Large"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  editCardContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
  card: {
    padding: 16,
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
    bottom: 35,
  },
});

export default memo(EditCard);
