import React, {memo, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {COUNTRIES} from '@database';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

interface MyAddressFormInputs {
  country: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

function EditAddress() {
  const nav = useLFNavigation();

  const {control, handleSubmit} = useForm<MyAddressFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.editAddressContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:edit_address')}
        />

        <View style={styles.form}>
          <View>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:country')}
            </LFText.Text>

            <View style={styles.dropdownContainer}>
              <Controller
                control={control}
                name="country"
                render={({field: {value = ''}}) => (
                  <LFForm.Dropdown
                    chooseData={value}
                    dropdownData={COUNTRIES}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:first_name')}
              </LFText.Text>
              <Controller
                control={control}
                name="firstName"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:last_name')}
              </LFText.Text>
              <Controller
                control={control}
                name="lastName"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:street_address')}
              </LFText.Text>
              <Controller
                control={control}
                name="streetAddress"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:street_address_2')}
              </LFText.Text>
              <Controller
                control={control}
                name="streetAddress2"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:city')}
              </LFText.Text>
              <Controller
                control={control}
                name="city"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:state')}
              </LFText.Text>
              <Controller
                control={control}
                name="state"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:zip_code')}
              </LFText.Text>
              <Controller
                control={control}
                name="zipCode"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.item}>
              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {translate('resources:phone_number')}
              </LFText.Text>
              <Controller
                control={control}
                name="zipCode"
                render={({field: {onChange, value = '', onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleSave)}
          title={translate('resources:save_address')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  editAddressContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  form: {
    display: 'flex',
    padding: 16,
    gap: 12,
  },
  formItem: {
    marginTop: 48,
  },
  item: {
    display: 'flex',
    marginTop: 24,
    gap: 12,
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 1000,
    marginTop: 32,
    height: 300,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
  contentContainerStyle: {
    paddingBottom: 120,
  },
});

export default memo(EditAddress);
