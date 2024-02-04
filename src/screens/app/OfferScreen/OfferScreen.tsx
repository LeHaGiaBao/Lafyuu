import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import OfferHeader from '../../../containers/app/HomeScreen/OfferHeader';
import ImageContainer from '../../../containers/app/HomeScreen/ImageContainer';
import ProductList from '../../../containers/app/HomeScreen/ProductList';


function OfferScreen() {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <OfferHeader />
            </View>
            <ScrollView style={styles.scrollView}>
                <ImageContainer />
                <ProductList />
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
})

export default OfferScreen;