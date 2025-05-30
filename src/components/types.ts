import {PropsWithChildren} from 'react';
import {
  ButtonProps,
  ColorValue,
  ImageSourcePropType,
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

export type NotificationType = 'Offer' | 'Feed' | 'Activity';

export interface LFButtonProps extends ButtonProps, TouchableOpacityProps {
  size: 'Large' | 'Small';
  type: 'Primary' | 'Secondary';
  icon?: string;
}

export interface LFButtonAddProps extends TouchableOpacityProps {}

export interface LFButtonCheckProps
  extends Omit<LFButtonProps, 'size' | 'type'> {
  icon?: string;
  isActive?: boolean;
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
  showNumber?: boolean;
}

export interface LFCategoryItemProps {
  name: string;
  icon: string;
}

export interface LFNavigationProps {
  name: string;
}

export interface LFNavigationItemProps
  extends LFNavigationProps,
    TouchableOpacityProps {
  route: string;
  navigationParam?: any;
  icon?: string;
  rightNode?: JSX.Element;
  rightContent?: string;
  numOfNotification?: number;
  isGoBack?: boolean;
}

export interface LFNavigationBackProps extends LFNavigationProps {
  icon?: string;
  rightNode?: JSX.Element;
}

export interface LFNotificationMarkProps {
  number?: number;
}

export interface LFNotificationItemProps extends ViewProps, PropsWithChildren {
  type: NotificationType;
  title: string;
  content: string;
  time: string;
  image?: string;
}

export interface LFDropdownProps
  extends TouchableOpacityProps,
    PropsWithChildren {
  chooseData: any;
  dropdownData: any[];
}

export interface LFCardProps extends TouchableOpacityProps, PropsWithChildren {
  cardId?: any;
  cardNumber: number;
  cardHolder: string;
  cardSave: string;
  backgroundColor?: string;
}

export interface LFCountdownProps {
  endTime: Date;
}

export interface BannerItem {
  id: any;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  endTime: Date;
}

export interface LFProductCardProps
  extends TouchableOpacityProps,
    PropsWithChildren {
  id: any;
  image: ImageSourcePropType;
  name: string;
  price: number;
  rating?: number;
  discountPrice?: number;
  percentage?: number;
  isFavorite?: boolean;
}

export interface LFHorizontalCardProps
  extends Pick<
      LFProductCardProps,
      'id' | 'image' | 'name' | 'price' | 'isFavorite'
    >,
    PropsWithChildren {
  numOfProduct?: number;
  type: 'Cart' | 'Order';
}

export interface LFProductDetailBannerProps {
  id: any;
  image: ImageSourcePropType;
}

export interface LFAddressItemProps extends ViewProps, PropsWithChildren {
  id: any;
  name: string;
  address: string;
  phone: string;
  onPress?: () => void;
  isChoose?: boolean;
}

export interface LFOrderItemProps
  extends TouchableOpacityProps,
    PropsWithChildren {
  id: any;
  orderCode: string;
  date: string;
  status: string;
  numberOfItems: number;
  totalPrice: number;
}

export interface LFOrderProcessProps {
  steps: Array<{
    id: any;
    label: string;
    completed: boolean;
  }>;
}

export interface LFReviewItemProps extends PropsWithChildren {
  id: any;
  imageProfile: any;
  name: string;
  rating: number;
  review: string;
  images?: any[];
  date: string;
}
