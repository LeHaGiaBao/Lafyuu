import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

function AuthTitle({ title, subTitle }: any) {
    return (
        <View style={styles.authContainer}>
            <Text style={styles.welcomeText}>{title}</Text>
            <Text style={styles.welcomeSubText}>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: 16,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    },
    welcomeSubText: {
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
})

export default AuthTitle;