import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../../../containers/app/HomeScreen/HomeHeader';
import ImageContainer from '../../../containers/app/HomeScreen/ImageContainer';
import CategoryTitle from '../../../containers/app/HomeScreen/CategoryTitle';
import CategoryList from '../../../containers/app/HomeScreen/CategoryList';

function HomeScreen() {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <HomeHeader />
            </View>
            <ScrollView style={styles.scrollView}>
                <ImageContainer />
                <CategoryTitle title="Category" subTitle="More Category" />
                <CategoryList />
                <CategoryTitle title="Flash Sale" subTitle="See More" />
                <CategoryTitle title="Mega Sale" subTitle="See More" />
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