import {PixelRatio} from 'react-native';

const FontFamily = {
  FontBold: 'Poppins-Bold',
  FontRegular: 'Poppins-Regular',
};

const FontSize = {
  FontSize32: PixelRatio.getPixelSizeForLayoutSize(32),
  FontSize24: PixelRatio.getPixelSizeForLayoutSize(24),
  FontSize20: PixelRatio.getPixelSizeForLayoutSize(20),
  FontSize16: PixelRatio.getPixelSizeForLayoutSize(16),
  FontSize14: PixelRatio.getPixelSizeForLayoutSize(14),
  FontSize10: PixelRatio.getPixelSizeForLayoutSize(10),
};

const FontLineHight = {
  LineHeighText: PixelRatio.getPixelSizeForLayoutSize(0.5),
};

const FontHeight = {
  Heigh150: '150%',
  Height180: '180%',
};

export {FontFamily, FontSize, FontLineHight, FontHeight};
