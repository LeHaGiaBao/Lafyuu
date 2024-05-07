import React from 'react';
import { Image } from 'react-native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

function ImageRecommend() {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageContainer}
                    source={require('../../../../../assets/Image/image.png')}
                    resizeMode="cover"
                    borderRadius={5}
                >
                    <Text style={styles.imageTitle}>Recomended{'\n'}Product</Text>
                    <Text style={styles.imageSubTitle}>We recommend the best for you</Text>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginTop: 16,
        borderRadius: 5,
    },
    imageTitle: {
        marginTop: 32,
        marginLeft: 24,
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#FFF',
    },
    imageSubTitle: {
        marginTop: 32,
        marginLeft: 24,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#FFF',
    }
})

export default ImageRecommend;