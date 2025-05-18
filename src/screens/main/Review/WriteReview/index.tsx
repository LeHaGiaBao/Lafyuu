import React, {memo, useCallback, useRef} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFRating, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

interface MyNameFormInputs {
  review: string;
  images?: any[];
}

function WriteReview() {
  const nav = useLFNavigation();
  const review = useRef(0);

  const {control, handleSubmit} = useForm<MyNameFormInputs>({
    mode: 'onChange',
  });

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.myNameContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:write_review')}
        />
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:write_review_description')}
          </LFText.Text>

          <LFRating.Star
            rating={review.current}
            ratingType="Big"
            canChange={true}
            showNumber={true}
          />
        </View>
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:write_your_review')}
          </LFText.Text>
          <Controller
            control={control}
            name="review"
            render={({field: {onChange, value = '', onBlur}}) => (
              <LFForm.TextArea
                value={value}
                type="Text"
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={translate('resources:write_your_review')}
              />
            )}
          />
        </View>

        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:photo')}
          </LFText.Text>
          <LFButton.ButtonAdd />
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
  myNameContainer: {
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

export default memo(WriteReview);
