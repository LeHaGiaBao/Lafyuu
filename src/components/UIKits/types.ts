import {PropsWithChildren} from 'react';
import {
  ButtonProps,
  ColorValue,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

export type TypoType =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'BodyLargeBold'
  | 'BodyLargeRegular'
  | 'BodyMediumBold'
  | 'BodyMediumRegular'
  | 'BodyNormalBold'
  | 'BodyNormalRegular'
  | 'CaptionLargeBold'
  | 'CaptionLargeRegular'
  | 'CaptionNormalBold'
  | 'CaptionNormalRegular'
  | 'CaptionNormalRegularLine'
  | 'FormNormal'
  | 'FormFill'
  | 'LinkNormal'
  | 'LinkSmall';

export interface LFButtonProps extends ButtonProps, TouchableOpacityProps {
  size: 'Large' | 'Small';
  type: 'Primary' | 'Secondary';
  icon?: string;
}

export interface LFButtonAddProps extends TouchableOpacityProps {}

export interface LFButtonCheckProps
  extends Omit<LFButtonProps, 'size' | 'type'> {
  icon?: string;
}

export interface LFButtonNumberProps extends TouchableOpacityProps {
  number: number;
}

export interface LFTextProps extends TextProps, PropsWithChildren {
  typo?: TypoType;
  color?: ColorValue;
  numberOfLines?: number;
  styles?: TextStyle;
}
