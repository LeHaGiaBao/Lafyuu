import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LFButtonAddProps, LFIcon} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';

const LFButtonAdd = (props: LFButtonAddProps) => {
  const {style, ...rest} = props;

  return (
    <TouchableOpacity style={[buttonStyles.button, style]} {...rest}>
      <LFIcon.Icon icon={'plus'} size={24} />
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: BackgroundColor.WhiteColor,
    borderColor: NeutralColor.LightColor,
    borderWidth: 1,
  },
});

export default memo(LFButtonAdd);
