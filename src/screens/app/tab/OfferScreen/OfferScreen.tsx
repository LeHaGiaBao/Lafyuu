import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CuponContainer from '../../../../containers/app/OfferScreen/CuponContainer';
import ImageContainerOffer from '../../../../containers/app/OfferScreen/ImageContainerOffer';
import ImageRecommendOffer from '../../../../containers/app/OfferScreen/ImageRecommendOffer';

function OfferScreen() {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <Text style={styles.title}>Offer</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <CuponContainer />
                <ImageContainerOffer />
                <ImageRecommendOffer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    homeHeader: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderBottomColor: '#EBF0FF',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
    },
    scrollView: {
        width: '100%',
        marginHorizontal: 20,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    }
})

export default OfferScreen;