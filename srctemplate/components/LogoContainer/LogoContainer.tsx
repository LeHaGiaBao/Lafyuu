import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { icon } from '../../assets';
import { PrimaryColor } from '../../constants/colors';

function LogoContainer() {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={icon.whiteIcon}
                style={{
                    height: 32,
                    width: 32,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: PrimaryColor.BlueColor,
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
})

export default LogoContainer;