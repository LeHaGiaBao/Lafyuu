/* eslint-disable react-native/no-inline-styles */
import React, {memo, PropsWithChildren} from 'react';
import {ColorValue, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {TypoType} from '../types';
import {generateTextStyles} from '../helper';
import {NeutralColor} from '@constants';

interface LFTextProps extends TextProps, PropsWithChildren {
  typo?: TypoType;
  color?: ColorValue;
  numberOfLines?: number;
  styles?: TextStyle;
}

const LFText = (props: LFTextProps) => {
  const {
    children,
    typo = 'BodyNormalRegular',
    color = NeutralColor.GreyColor,
    numberOfLines = 0,
    styles,
    ...rest
  } = props;

  const {textSize, textFamily, textLineHeight} = generateTextStyles(typo);

  return (
    <Text
      style={[
        textStyles.textStyle,
        {
          fontSize: textSize,
          fontFamily: textFamily,
          color: color,
          lineHeight: textSize * textLineHeight,
          textDecorationLine:
            typo === 'CaptionNormalRegularLine' ? 'line-through' : 'none',
        },
        styles,
      ]}
      numberOfLines={numberOfLines}
      {...rest}>
      {children}
    </Text>
  );
};

const textStyles = StyleSheet.create({
  textStyle: {
    letterSpacing: 0.5,
  },
});

export default memo(LFText);
