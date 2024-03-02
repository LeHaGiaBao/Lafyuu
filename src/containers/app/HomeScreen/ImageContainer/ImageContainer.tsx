import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize } from '../../../../constants/fonts';
import { BackgroundColor, NeutralColor, PrimaryColor } from '../../../../constants/colors';

function ImageContainer() {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageContainer}
                    source={require('../../../../../assets/Image/PromotionImage.png')}
                    resizeMode="cover"
                    borderRadius={5}
                >
                    <Text style={styles.imageTitle}>Super Flash Sale {'\n'}50% Off</Text>
                    <View style={styles.timeCountDownContainer}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>08</Text>
                        </View>
                        <View style={styles.dotsContainer}>
                            <Text style={styles.dots}>:</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>34</Text>
                        </View>
                        <View style={styles.dotsContainer}>
                            <Text style={styles.dots}>:</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>52</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.dotCarouselContainer}>
                    <View style={styles.dotInactive} />
                    <View style={styles.dotInactive} />
                    <View style={styles.dotActive} />
                    <View style={styles.dotInactive} />
                    <View style={styles.dotInactive} />
                </View>
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
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize24,
        color: BackgroundColor.WhiteColor,
    },
    timeCountDownContainer: {
        marginTop: 29,
        marginLeft: 24,
        display: 'flex',
        flexDirection: 'row',
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        borderRadius: 5,
        backgroundColor: BackgroundColor.WhiteColor,
    },
    timeText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize16,
        color: NeutralColor.DarkColor,
    },
    dotsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
        marginRight: 4,
    },
    dots: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize16,
        color: BackgroundColor.WhiteColor,
    },
    dotCarouselContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    dotInactive: {
        height: 8,
        width: 8,
        backgroundColor: NeutralColor.LightColor,
        borderRadius: 100,
    },
    dotActive: {
        height: 8,
        width: 8,
        backgroundColor: PrimaryColor.BlueColor,
        borderRadius: 100,
    }
})

export default ImageContainer;