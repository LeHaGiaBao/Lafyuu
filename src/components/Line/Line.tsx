import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFLineProps} from '@components';
import {NeutralColor} from '@constants';

const LFLine = (props: LFLineProps) => {
  const {color = NeutralColor.LightColor, ...rest} = props;

  return <View style={[lineStyles.line, {backgroundColor: color}]} {...rest} />;
};

const lineStyles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
  },
});

export default memo(LFLine);
