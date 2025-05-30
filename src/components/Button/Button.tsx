/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFButtonProps, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';

const LFButton = (props: LFButtonProps) => {
  const {title, size = 'Large', type = 'Primary', icon, style, ...rest} = props;

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        style,
        {
          width: size === 'Large' ? '100%' : 'auto',
          backgroundColor:
            type === 'Primary'
              ? PrimaryColor.BlueColor
              : BackgroundColor.WhiteColor,
          shadowColor:
            type === 'Primary'
              ? PrimaryColor.BlueColor
              : BackgroundColor.WhiteColor,
          borderColor:
            type === 'Secondary'
              ? NeutralColor.LightColor
              : BackgroundColor.WhiteColor,
          borderWidth: props.type === 'Secondary' ? 1 : 0,
          display: 'flex',
          flexDirection: props.icon ? 'row' : 'column',
          justifyContent: props.icon ? 'space-between' : 'center',
          alignItems: 'center',
        },
      ]}
      {...rest}>
      {icon ? (
        <>
          <LFIcon.Icon icon={`${props.icon}`} size={24} />
          <View style={buttonStyles.text}>
            <LFText.Text
              typo="H5"
              color={
                type === 'Primary'
                  ? BackgroundColor.WhiteColor
                  : NeutralColor.GreyColor
              }>
              {title}
            </LFText.Text>
          </View>
        </>
      ) : (
        <LFText.Text
          typo="H5"
          color={
            type === 'Primary'
              ? BackgroundColor.WhiteColor
              : NeutralColor.GreyColor
          }>
          {title}
        </LFText.Text>
      )}
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    height: 57,
    borderRadius: 5,
    padding: 16,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.24,
    shadowRadius: 30 * 0.24,
    elevation: 5,
  },
  text: {
    alignItems: 'center',
    width: '100%',
  },
});

export default memo(LFButton);
