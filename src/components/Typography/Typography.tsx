/* eslint-disable react/react-in-jsx-scope */
import {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TypographyProps} from '@/@types/styles';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@/constants';

function Typography(props: TypographyProps) {
  let textFamily = FontFamily.FontBold;
  let textColor = PrimaryColor.BlueColor;
  let textSize = FontSize.FontSize16;
  let textLineHight = LineHeight.LineHeight150;

  switch (props.fontFamily) {
    case 'Bold':
      textFamily = FontFamily.FontBold;
      break;
    case 'Regular':
      textFamily = FontFamily.FontRegular;
      break;
  }

  switch (props.color) {
    case 'Blue':
      textColor = PrimaryColor.BlueColor;
      break;
    case 'Red':
      textColor = PrimaryColor.RedColor;
      break;
    case 'Yellow':
      textColor = PrimaryColor.YellowColor;
      break;
    case 'Green':
      textColor = PrimaryColor.GreenColor;
      break;
    case 'Purple':
      textColor = PrimaryColor.PurpleColor;
      break;
    case 'Dark':
      textColor = NeutralColor.DarkColor;
      break;
    case 'Grey':
      textColor = NeutralColor.GreyColor;
      break;
    case 'Light':
      textColor = NeutralColor.LightColor;
      break;
    case 'White':
      textColor = BackgroundColor.WhiteColor;
      break;
  }

  switch (props.size) {
    case 'H1':
      textSize = FontSize.FontSize32;
      break;
    case 'H2':
      textSize = FontSize.FontSize24;
      break;
    case 'H3':
      textSize = FontSize.FontSize20;
      break;
    case 'H4':
      textSize = FontSize.FontSize16;
      break;
    case 'H5':
    case 'Medium':
      textSize = FontSize.FontSize14;
      break;
    case 'H6':
      textSize = FontSize.FontSize10;
      break;
    case 'Large':
      switch (props.type) {
        case 'Text':
          textSize = FontSize.FontSize16;
          break;
        case 'Caption':
          textSize = FontSize.FontSize12;
          break;
      }
      break;
    case 'Normal':
      switch (props.type) {
        case 'Text':
        case 'Form':
          textSize = FontSize.FontSize12;
          break;
        case 'Caption':
          textSize = FontSize.FontSize10;
          break;
        case 'Link':
          textSize = FontSize.FontSize14;
          break;
      }
      break;
    case 'Line':
      textSize = FontSize.FontSize10;
      break;
    case 'Small':
    case 'Fill':
      textLineHight = FontSize.FontSize12;
      break;
  }

  switch (props.type) {
    case 'Heading':
    case 'Caption':
    case 'Link':
      textLineHight = LineHeight.LineHeight150;
      break;
    case 'Text':
    case 'Form':
      textLineHight = LineHeight.LineHeight180;
      break;
  }

  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={[
            styles.textStyle,
            {
              fontFamily: textFamily,
              fontSize: textSize,
              color: textColor,
              lineHeight: textSize * textLineHight,
            },
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    letterSpacing: 0.5,
  },
});

export default memo(Typography);
