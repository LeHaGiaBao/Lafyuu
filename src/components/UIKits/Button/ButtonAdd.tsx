import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {BackgroundColor, NeutralColor} from '@constants';
import Icon from '../Icon/Icon';

interface LFButtonAddProps extends TouchableOpacityProps {}

const LFButtonAdd = (props: LFButtonAddProps) => {
  const {style, ...rest} = props;

  return (
    <TouchableOpacity style={[buttonStyles.button, style]} {...rest}>
      <Icon icon={'plus'} size={24} />
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
