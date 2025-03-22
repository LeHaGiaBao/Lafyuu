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
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';

function Input(props: InputProps) {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  let icon = '';
  let borderColor = NeutralColor.LightColor;

  if (focus) {
    borderColor = PrimaryColor.BlueColor;
  }

  switch (props.type) {
    case 'Email':
      if (focus) {
        icon = 'message-b';
      } else {
        icon = 'message';
      }
      break;
    case 'Password':
      if (focus) {
        icon = 'password-b';
      } else {
        icon = 'password';
      }
      break;
    case 'Account':
      if (focus) {
        icon = 'user-b';
      } else {
        icon = 'user';
      }
      break;
    case 'Phone':
      if (focus) {
        icon = 'phone-b';
      } else {
        icon = 'phone';
      }
      break;
    case 'Search':
      icon = 'search-b';
      break;
    case 'Text':
    default:
      break;
  }

  return (
    <>
      <View style={[styles.input, {borderColor: borderColor}]}>
        <Icon icon={icon} size={24} />
        <TextInput
          autoCapitalize="none"
          value={value}
          onChangeText={value => setValue(value)}
          style={[
            styles.placeholderText,
            {
              fontFamily:
                value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
            },
          ]}
          placeholder={props.placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={props.type === 'Password' && true}
        />
      </View>
      {!props.errorText && (
        <Typography
          text={props.errorText}
          fontFamily="Bold"
          size="Large"
          type="Caption"
          color="Red"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
    width: '100%',
    height: 40,
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight180,
  },
});

export default memo(Input);
