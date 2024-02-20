import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CuponContainer() {
    return (
        <View style={styles.cuponContainer}>
            <Text style={styles.content}>Use “MEGSL” Cupon For{'\n'}Get 90%off</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cuponContainer: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        padding: 16,
        height: 80,
        backgroundColor: '#40BFFF',
        borderRadius: 5,
    },
    content: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#FFF',
    }
})

export default CuponContainer;