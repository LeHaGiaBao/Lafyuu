/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  NeutralColor,
  PrimaryColor,
} from '@constants';
import LFIcon from '../Icon';
import {LFSearchInputProps} from '../types';

const LFSearchInput = (props: LFSearchInputProps) => {
  const {value = '', isActive, ...rest} = props;
  const [textValue, setTextValue] = useState(value);
  const [focus, setFocus] = useState(false);

  const navToSearch = useCallback(() => {}, []);

  const clearTextValue = useCallback(() => {
    setTextValue('');
  }, []);

  return (
    <>
      {isActive ? (
        <View
          style={[
            inputStyles.input,
            {
              borderColor: focus
                ? PrimaryColor.BlueColor
                : NeutralColor.LightColor,
              height: isActive ? 44 : 42,
            },
          ]}>
          <LFIcon.Icon icon={'search-b'} size={16} />
          <TextInput
            autoCapitalize="none"
            value={textValue}
            onChangeText={val => setTextValue(val)}
            style={[
              inputStyles.placeholderText,
              {
                fontFamily:
                  textValue === ''
                    ? FontFamily.FontRegular
                    : FontFamily.FontBold,
                height: 44,
                width: textValue !== '' && isActive ? '85%' : '100%',
              },
            ]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...rest}
          />
          {textValue !== '' && isActive && (
            <TouchableOpacity onPress={clearTextValue}>
              <LFIcon.Icon icon={'x'} size={20} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={[
            inputStyles.input,
            {
              borderColor: focus
                ? PrimaryColor.BlueColor
                : NeutralColor.LightColor,
              height: isActive ? 44 : 42,
            },
          ]}
          onPress={navToSearch}>
          <LFIcon.Icon icon={'search-b'} size={16} />
          <TextInput
            autoCapitalize="none"
            value={textValue}
            onChangeText={val => setTextValue(val)}
            style={[
              inputStyles.placeholderText,
              {
                fontFamily:
                  textValue === ''
                    ? FontFamily.FontRegular
                    : FontFamily.FontBold,
                height: 42,
                width: '100%',
              },
            ]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...rest}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const inputStyles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  placeholderText: {
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
  },
});

export default memo(LFSearchInput);
