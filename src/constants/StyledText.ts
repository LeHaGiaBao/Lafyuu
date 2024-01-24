import {PixelRatio, StyleSheet} from 'react-native';

const StyledHeadingText = StyleSheet.create({
  Heading1: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(32),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  Heading2: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(24),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  Heading3: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(20),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  Heading4: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  Heading5: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  Heading6: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
});

const StyledBodyText = StyleSheet.create({
  LargeTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
  LargeTextRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
  MediumTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
  MediumTextRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
  NormalTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
  NormalTextRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '180%',
  },
});

const StyledCaptionText = StyleSheet.create({
  LargeTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  LargeTextRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  NormalTextBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
  NormalTextRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
  },
});

const StyledLinkText = StyleSheet.create({
  LargeTextNormal: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
    color: '#40BFFF',
  },
  LargeTextSmall: {
    fontFamily: 'Poppins-Bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(0.5),
    height: '150%',
    color: '#40BFFF',
  },
});

export {StyledHeadingText, StyledBodyText, StyledCaptionText, StyledLinkText};
