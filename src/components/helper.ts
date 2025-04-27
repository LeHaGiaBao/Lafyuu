import {InputType, RatingType, TypoType} from '@components';
import {FontFamily, FontSize, LineHeight} from '@constants';

export const generateTextStyles = (typo: TypoType) => {
  let textSize: number = FontSize.FontSize10;
  let textFamily: string = FontFamily.FontBold;
  let textLineHeight: number = LineHeight.LineHeight150;

  switch (typo) {
    case 'H1':
      textSize = FontSize.FontSize32;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'H2':
      textSize = FontSize.FontSize24;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'H3':
      textSize = FontSize.FontSize20;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'H4':
      textSize = FontSize.FontSize16;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'H5':
      textSize = FontSize.FontSize14;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'H6':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'BodyLargeBold':
      textSize = FontSize.FontSize16;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'BodyLargeRegular':
      textSize = FontSize.FontSize16;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'BodyMediumBold':
      textSize = FontSize.FontSize14;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'BodyMediumRegular':
      textSize = FontSize.FontSize16;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'BodyNormalBold':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'BodyNormalRegular':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'CaptionLargeBold':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'CaptionLargeRegular':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'CaptionNormalBold':
      textSize = FontSize.FontSize10;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'CaptionNormalRegular':
      textSize = FontSize.FontSize10;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'CaptionNormalRegularLine':
      textSize = FontSize.FontSize10;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'FormNormal':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontRegular;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'FormFill':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight180;
      break;
    case 'LinkNormal':
      textSize = FontSize.FontSize14;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
    case 'LinkSmall':
      textSize = FontSize.FontSize12;
      textFamily = FontFamily.FontBold;
      textLineHeight = LineHeight.LineHeight150;
      break;
  }

  return {
    textSize,
    textFamily,
    textLineHeight,
  };
};

export const generateInputIcon = (type?: InputType, isFocus?: boolean) => {
  let icon = '';

  switch (type) {
    case 'Email':
      if (isFocus) {
        icon = 'message-b';
      } else {
        icon = 'message';
      }
      break;
    case 'Password':
      if (isFocus) {
        icon = 'password-b';
      } else {
        icon = 'password';
      }
      break;
    case 'Account':
      if (isFocus) {
        icon = 'user-b';
      } else {
        icon = 'user';
      }
      break;
    case 'Phone':
      if (isFocus) {
        icon = 'phone-b';
      } else {
        icon = 'phone';
      }
      break;
    case 'Search':
      icon = 'search-b';
      break;
    case 'Text':
    default:
      break;
  }

  return {
    icon,
  };
};

export const generateRatingStarSize = (ratingType?: RatingType) => {
  let size = 12;
  let gap = 2;

  switch (ratingType) {
    case 'Small':
      size = 12;
      gap = 2;
      break;
    case 'Medium':
      size = 16;
      gap = 4;
      break;
    case 'Big':
      size = 32;
      gap = 16;
      break;
  }

  return {
    size,
    gap,
  };
};
