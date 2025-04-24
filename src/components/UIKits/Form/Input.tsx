import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  NeutralColor,
  PrimaryColor,
} from '@constants';
import Icon from '../Icon/Icon';
import LFText from '../Text';
import {generateInputIcon} from '../helper';
import {LFInputProps} from '../types';

const LFInput = (props: LFInputProps) => {
  const {value = '', type, errorText, ...rest} = props;
  const [textValue, setTextValue] = useState(value);
  const [focus, setFocus] = useState(false);

  const {icon} = generateInputIcon(type, focus);

  return (
    <>
      <View
        style={[
          inputStyles.input,
          {
            borderColor: focus
              ? PrimaryColor.BlueColor
              : NeutralColor.LightColor,
          },
        ]}>
        <Icon icon={icon} size={24} />
        <TextInput
          autoCapitalize="none"
          value={textValue}
          onChangeText={val => setTextValue(val)}
          style={[
            inputStyles.placeholderText,
            {
              fontFamily:
                textValue === '' ? FontFamily.FontRegular : FontFamily.FontBold,
            },
          ]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={type === 'Password' && true}
          {...rest}
        />
      </View>
      {errorText && (
        <LFText.Text typo="CaptionLargeBold" color={PrimaryColor.RedColor}>
          {errorText}
        </LFText.Text>
      )}
    </>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  placeholderText: {
    width: '92%',
    height: 40,
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
  },
});

export default memo(LFInput);
