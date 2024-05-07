import React, {memo, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MinusSvgIcon from '@assets/Calculate/Minus.svg';
import PlusSvgIcon from '@assets/Calculate/Plus.svg';
import {BackgroundColor, FontFamily, FontSize, NeutralColor} from '@constants';

function InputNumberButton() {
    const [countNumber, setCountNumber] = useState(1);

    const decreaseNumber = () => {
        if (countNumber > 0 && countNumber !== 1) {
            setCountNumber(() => countNumber - 1);
        }
    };

    const increaseNumber = () => {
        if (countNumber > 0) {
            setCountNumber(() => countNumber + 1);
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonIcon} onPress={decreaseNumber}>
                <MinusSvgIcon width={16} height={16} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <Text style={styles.countText}>{countNumber}</Text>
            </View>
            <TouchableOpacity style={styles.buttonIcon} onPress={increaseNumber}>
                <PlusSvgIcon width={16} height={16} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 104,
        height: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: BackgroundColor.WhiteColor,
        borderRadius: 5,
        borderColor: NeutralColor.LightColor,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8,
    },
    buttonIcon: {
        alignItems: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: NeutralColor.LightColor,
        paddingLeft: 16,
        paddingRight: 16,
    },
    countText: {
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
});

export default memo(InputNumberButton);
