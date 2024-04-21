/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {CaptionTextProps} from '../../@types';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '../../constants';

function CaptionText(props: CaptionTextProps) {
    let textFamily = FontFamily.FontBold;
    let textSize = FontSize.FontSize16;
    let textColor = PrimaryColor.BlueColor;

    switch (props.family) {
        case 'Bold':
            textFamily = FontFamily.FontBold;
            break;
        case 'Regular':
            textFamily = FontFamily.FontRegular;
            break;
    }

    switch (props.size) {
        case 'Large':
            textSize = FontSize.FontSize12;
            break;
        case 'Normal':
            textSize = FontSize.FontSize10;
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

    return <Text style={(styles.captionTextStyle, {fontFamily: textFamily, fontSize: textSize, color: textColor})}>{props.text}</Text>;
}

const styles = StyleSheet.create({
    captionTextStyle: {
        letterSpacing: 0.5,
        height: '150%',
    },
});

export default memo(CaptionText);
