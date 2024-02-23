import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeHeader from '../../../layouts/HomeHeader';
import ImageContainer from '../../../containers/app/HomeScreen/ImageContainer';
import CategoryTitle from '../../../containers/app/HomeScreen/CategoryTitle';
import CategoryList from '../../../containers/app/HomeScreen/CategoryList';
import FlashSale from '../../../containers/app/HomeScreen/FlashSale';
import MegaSale from '../../../containers/app/HomeScreen/MegaSale';
import ImageRecommend from '../../../containers/app/HomeScreen/ImageRecommend';
import ProductList from '../../../containers/app/HomeScreen/ProductList';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <HomeHeader navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <ImageContainer />
                <CategoryTitle
                    title="Category"
                    subTitle="More Category"
                    navigation={navigation}
                    screen="ExploreScreen"
                />
                <CategoryList />
                <CategoryTitle
                    title="Flash Sale"
                    subTitle="See More"
                    navigation={navigation}
                    screen="OfferViewScreen"
                />
                <FlashSale />
                <CategoryTitle
                    title="Mega Sale"
                    subTitle="See More"
                    navigation={navigation}
                    screen="OfferViewScreen"
                />
                <MegaSale />
                <ImageRecommend />
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

export default HomeScreen;