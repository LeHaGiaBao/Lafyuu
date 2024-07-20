/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchInputProps} from '@/@types/styles';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@/constants';
import Icon from '../Icon/Icon';

function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  let borderColor = NeutralColor.LightColor;

  if (focus) {
    borderColor = PrimaryColor.BlueColor;
  }

  const navToSearch = () => {};

  const clearInput = () => {
    setValue('');
  };

  return (
    <>
      {props.isActive ? (
        <View
          style={[
            styles.input,
            {borderColor: borderColor, height: props.isActive ? 44 : 42},
          ]}>
          <Icon icon={'search-b'} size={16} />
          <TextInput
            autoCapitalize="none"
            value={value}
            onChangeText={value => setValue(value)}
            style={[
              styles.placeholderText,
              {
                fontFamily:
                  value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
                height: 44,
                width: value !== '' && props.isActive ? '85%' : '100%',
              },
            ]}
            placeholder={props.placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            secureTextEntry={props.type === 'Password' ?? true}
          />
          {value !== '' && props.isActive && (
            <TouchableOpacity onPress={clearInput}>
              <Icon icon={'x'} size={20} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.input,
            {borderColor: borderColor, height: props.isActive ? 44 : 42},
          ]}
          onPress={navToSearch}>
          <Icon icon={'search-b'} size={16} />
          <TextInput
            autoCapitalize="none"
            value={value}
            onChangeText={value => setValue(value)}
            style={[
              styles.placeholderText,
              {
                fontFamily:
                  value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
                height: 42,
                width: '100%',
              },
            ]}
            placeholder={props.placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            secureTextEntry={props.type === 'Password' ?? true}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight180,
  },
});

export default memo(SearchInput);
