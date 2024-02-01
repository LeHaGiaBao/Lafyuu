import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function LogoContainer() {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../../../assets/Icon/iconWhite.png')}
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
        backgroundColor: '#40BFFF',
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
})

export default LogoContainer;