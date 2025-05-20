/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LFButtonCheckProps, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';

const LFButtonCheck = (props: LFButtonCheckProps) => {
  const {title, icon, isActive, ...rest} = props;

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        {
          backgroundColor: isActive
            ? 'rgba(64, 191, 255, 0.1)'
            : BackgroundColor.WhiteColor,
          borderColor: isActive
            ? BackgroundColor.WhiteColor
            : NeutralColor.LightColor,
          borderWidth: isActive ? 0 : 1,
          display: 'flex',
          flexDirection: icon ? 'row' : 'column',
          justifyContent: icon ? 'space-between' : 'center',
          alignItems: 'center',
          gap: 8,
        },
      ]}
      {...rest}>
      {props.icon ? (
        <>
          <LFIcon.Icon icon={`${props.icon}`} size={16} />
          <LFText.Text
            typo={isActive ? 'CaptionLargeBold' : 'CaptionLargeRegular'}
            color={isActive ? PrimaryColor.BlueColor : NeutralColor.GreyColor}>
            {title}
          </LFText.Text>
        </>
      ) : (
        <LFText.Text
          typo={isActive ? 'CaptionLargeBold' : 'CaptionLargeRegular'}
          color={isActive ? PrimaryColor.BlueColor : NeutralColor.GreyColor}>
          {title}
        </LFText.Text>
      )}
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 50,
    padding: 16,
    borderRadius: 5,
  },
});

export default memo(LFButtonCheck);
