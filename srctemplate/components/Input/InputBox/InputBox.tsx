import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {FontFamily, FontSize} from '../../../constants/fonts';
import {NeutralColor, PrimaryColor} from '../../../constants/colors';

interface InputBoxProps {
    placeholder: string;
}

function InputBox({placeholder}: InputBoxProps) {
    const [focus, setFocus] = useState(false);
    let borderStyles;

    switch (focus) {
        case true:
            borderStyles = styles.focusBorder;
            break;
        case false:
            borderStyles = styles.defaultBorder;
            break;
    }

    return (
        <TextInput
            placeholder={placeholder}
            autoCapitalize="none"
            style={[styles.inputContainer, borderStyles]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.GreyColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    defaultBorder: {
        borderColor: NeutralColor.LightColor,
    },
    focusBorder: {
        borderColor: PrimaryColor.BlueColor,
    },
});

export default InputBox;
