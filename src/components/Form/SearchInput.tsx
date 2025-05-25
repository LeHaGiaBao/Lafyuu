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
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import LFIcon from '../Icon';
import LFText from '../Text';
import {LFSearchInputProps} from '../types';

const LFSearchInput = (props: LFSearchInputProps) => {
  const nav = useLFNavigation();
  const {value = '', isActive, placeholder, onChangeText, ...rest} = props;
  const [focus, setFocus] = useState(false);

  const navToSearch = useCallback(() => {
    nav.navigate(Routes.searchProduct);
  }, [nav]);

  const onSubmitEditing = useCallback(() => {
    nav.navigate(Routes.searchResult);
  }, [nav]);

  const clearTextValue = useCallback(() => {
    onChangeText?.('');
  }, [onChangeText]);

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
            value={value}
            onChangeText={onChangeText}
            style={[
              inputStyles.placeholderText,
              {
                fontFamily:
                  value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
                height: 44,
                width: value !== '' && isActive ? '85%' : '100%',
              },
            ]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
            returnKeyType="search"
            {...rest}
          />
          {value !== '' && isActive && (
            <TouchableOpacity onPress={clearTextValue}>
              <LFIcon.Icon icon={'x'} size={20} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={[
            inputStyles.inputNotActive,
            {
              borderColor: focus
                ? PrimaryColor.BlueColor
                : NeutralColor.LightColor,
              height: isActive ? 44 : 42,
            },
          ]}
          onPress={navToSearch}>
          <LFIcon.Icon icon={'search-b'} size={16} />
          <LFText.Text typo="FormNormal" style={inputStyles.placeholderText}>
            {placeholder}
          </LFText.Text>
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
  inputNotActive: {
    display: 'flex',
    flexDirection: 'row',
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
