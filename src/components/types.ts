import {PropsWithChildren} from 'react';
import {
  ButtonProps,
  ColorValue,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
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

export type InputType =
  | 'Text'
  | 'Email'
  | 'Password'
  | 'Account'
  | 'Phone'
  | 'Search';

export type RatingType = 'Small' | 'Medium' | 'Big';

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
  textAlign?: 'auto' | 'center';
}

export interface LFInputProps extends TextInputProps, PropsWithChildren {
  type?: InputType;
  errorText?: string;
}

export interface LFSearchInputProps extends LFInputProps {
  isActive: boolean;
}

export interface LFDatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date) => void;
}

export interface LFLineProps extends ViewProps, PropsWithChildren {
  color?: ColorValue;
}

export interface LFRatingProps extends ViewProps, PropsWithChildren {
  ratingType?: RatingType;
  rating: number;
  canChange?: boolean;
}

export interface LFCategoryItemProps {
  name: string;
  icon: string;
}
