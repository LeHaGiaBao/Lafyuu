import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FormTextProps} from '@types';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';

function FormText(props: FormTextProps) {
    let textFamily = FontFamily.FontBold;
    let textSize = FontSize.FontSize12;
    let textColor = PrimaryColor.BlueColor;

    switch (props.family) {
        case 'Normal':
            textFamily = FontFamily.FontBold;
            break;
        case 'Fill':
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
    }

    return (
        <Text
            style={
                (styles.bodyTextStyle,
                {fontFamily: textFamily, fontSize: textSize, color: textColor})
            }>
            {props.text}
        </Text>
    );
}

const styles = StyleSheet.create({
    bodyTextStyle: {
        letterSpacing: 0.5,
        height: '180%',
    },
});

export default memo(FormText);
