import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {LFInputProps} from '@components';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  NeutralColor,
  PrimaryColor,
} from '@constants';

const LFTextArea = (props: LFInputProps) => {
  const {value = '', ...rest} = props;
  const [textValue, setTextValue] = useState(value);
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        inputStyles.areaContainer,
        {borderColor: focus ? PrimaryColor.BlueColor : NeutralColor.LightColor},
      ]}>
      <TextInput
        style={[
          inputStyles.placeholderText,
          {
            fontFamily:
              value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
          },
        ]}
        autoCapitalize="none"
        value={textValue}
        onChangeText={val => setTextValue(val)}
        multiline={true}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  areaContainer: {
    width: '100%',
    height: 160,
    padding: 16,
    backgroundColor: BackgroundColor.WhiteColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  placeholderText: {
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
  },
});

export default memo(LFTextArea);
