import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BackgroundColor, PrimaryColor } from '../../../constants/colors';
import { icon } from '../../../assets';

function SplashScreen(): React.JSX.Element {
    return (
        <View style={styles.splashScreen}>
            <View style={styles.logoContainer}>
                <Image
                    source={icon.welcomeIcon}
                    style={{
                        height: 32,
                        width: 32,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    splashScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PrimaryColor.BlueColor
    },
    logoContainer: {
        backgroundColor: BackgroundColor.WhiteColor,
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
});

export default SplashScreen;
