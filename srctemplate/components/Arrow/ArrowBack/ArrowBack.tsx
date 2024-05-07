import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { icon } from '../../../assets';

function ArrowBack({ navigation }: any) {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={icon.leftIcon}
                style={styles.iconArrowStyle}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconArrowStyle: {
        marginRight: 10,
    },
})

export default ArrowBack;