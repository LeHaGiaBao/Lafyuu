/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';
import LFIcon from '../Icon';
import LFText from '../Text';
import {LFButtonCheckProps} from '../types';

const LFButtonCheck = (props: LFButtonCheckProps) => {
  const {title, icon, ...rest} = props;
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = useCallback(() => {
    setIsCheck(!isCheck);
  }, [isCheck]);

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        {
          backgroundColor: isCheck
            ? 'rgba(64, 191, 255, 0.1)'
            : BackgroundColor.WhiteColor,
          borderColor: isCheck
            ? BackgroundColor.WhiteColor
            : NeutralColor.LightColor,
          borderWidth: isCheck ? 0 : 1,
          display: 'flex',
          flexDirection: icon ? 'row' : 'column',
          justifyContent: icon ? 'space-between' : 'center',
          alignItems: 'center',
          gap: 8,
        },
      ]}
      onPress={handleCheck}
      {...rest}>
      {props.icon ? (
        <>
          <LFIcon.Icon icon={`${props.icon}`} size={16} />
          <LFText.Text
            typo={isCheck ? 'CaptionLargeBold' : 'CaptionLargeRegular'}
            color={isCheck ? PrimaryColor.BlueColor : NeutralColor.GreyColor}>
            {title}
          </LFText.Text>
        </>
      ) : (
        <LFText.Text
          typo={isCheck ? 'CaptionLargeBold' : 'CaptionLargeRegular'}
          color={isCheck ? PrimaryColor.BlueColor : NeutralColor.GreyColor}>
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
