/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {HeadingProps} from '../../@types';
import {FontFamily, FontSize} from '../../constants/fonts';
import {NeutralColor, PrimaryColor} from '../../constants';

function Heading1(props: HeadingProps) {
    let headingSize = FontSize.FontSize32;
    let headingColor = NeutralColor.DarkColor;

    switch (props.size) {
        case 'H1':
            headingSize = FontSize.FontSize32;
            break;
        case 'H2':
            headingSize = FontSize.FontSize24;
            break;
        case 'H3':
            headingSize = FontSize.FontSize20;
            break;
        case 'H4':
            headingSize = FontSize.FontSize16;
            break;
        case 'H5':
            headingSize = FontSize.FontSize14;
            break;
        case 'H6':
            headingSize = FontSize.FontSize10;
            break;
    }

    switch (props.color) {
        case 'Blue':
            headingColor = PrimaryColor.BlueColor;
            break;
        case 'Red':
            headingColor = PrimaryColor.RedColor;
            break;
        case 'Yellow':
            headingColor = PrimaryColor.YellowColor;
            break;
        case 'Green':
            headingColor = PrimaryColor.GreenColor;
            break;
        case 'Purple':
            headingColor = PrimaryColor.PurpleColor;
            break;
        case 'Dark':
            headingColor = NeutralColor.DarkColor;
            break;
        case 'Grey':
            headingColor = NeutralColor.GreyColor;
            break;
        case 'Light':
            headingColor = NeutralColor.LightColor;
            break;
    }

    return <Text style={(styles.headingTextStyles, {fontSize: headingSize, color: headingColor})}>{props.text}</Text>;
}

const styles = StyleSheet.create({
    headingTextStyles: {
        fontFamily: FontFamily.FontBold,
        letterSpacing: 0.5,
        height: '150%',
    },
});

export default memo(Heading1);
