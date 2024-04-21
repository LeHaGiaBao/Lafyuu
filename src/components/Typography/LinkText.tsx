/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LinkTextProps} from '../../@types';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '../../constants';

function LinkText(props: LinkTextProps) {
    let textFamily = FontFamily.FontBold;
    let textSize = FontSize.FontSize14;
    let textColor = PrimaryColor.BlueColor;

    switch (props.size) {
        case 'Normal':
            textSize = FontSize.FontSize14;
            break;
        case 'Small':
            textSize = FontSize.FontSize12;
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
        <TouchableOpacity onPress={() => props.onPress}>
            <Text style={(styles.captionTextStyle, {fontFamily: textFamily, fontSize: textSize, color: textColor})}>{props.text}</Text>;
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    captionTextStyle: {
        letterSpacing: 0.5,
        height: '150%',
    },
});

export default memo(LinkText);
