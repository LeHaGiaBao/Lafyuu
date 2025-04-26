import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  NeutralColor,
  PrimaryColor,
} from '@constants';
import translate from '@translations/i18n';
import LFText from '../Text';
import {LFInputProps} from '../types';

const LFCuponInput = (props: LFInputProps) => {
  const {value = '', errorText, ...rest} = props;
  const [textValue, setTextValue] = useState(value);
  const [focus, setFocus] = useState(false);

  return (
    <>
      <View style={inputStyles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          value={textValue}
          onChangeText={val => setTextValue(val)}
          style={[
            inputStyles.placeholderText,
            {
              fontFamily:
                textValue === '' ? FontFamily.FontRegular : FontFamily.FontBold,
              borderColor: focus
                ? PrimaryColor.BlueColor
                : NeutralColor.LightColor,
            },
          ]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
        <TouchableOpacity style={inputStyles.button}>
          <LFText.Text typo="H5" color={BackgroundColor.WhiteColor}>
            {translate('resource:apply')}
          </LFText.Text>
        </TouchableOpacity>
      </View>
      {errorText && (
        <View style={inputStyles.error}>
          <LFText.Text typo="CaptionLargeBold" color={PrimaryColor.RedColor}>
            {errorText}
          </LFText.Text>
        </View>
      )}
    </>
  );
};

const inputStyles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
  },
  placeholderText: {
    padding: 16,
    borderWidth: 1,
    width: '75%',
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  button: {
    width: '25%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColor.BlueColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  error: {
    marginTop: 8,
  },
});

export default memo(LFCuponInput);
