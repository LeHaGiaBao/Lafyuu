import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {InputProps} from '@/@types/styles';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@/constants';

function TextArea(props: InputProps) {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  let borderColor = NeutralColor.LightColor;

  if (focus) {
    borderColor = PrimaryColor.BlueColor;
  }

  return (
    <View style={[styles.areaContainer, {borderColor: borderColor}]}>
      <TextInput
        style={[
          styles.placeholderText,
          {
            fontFamily:
              value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
          },
        ]}
        autoCapitalize="none"
        value={value}
        onChangeText={value => setValue(value)}
        multiline={true}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight180,
  },
});

export default memo(TextArea);
