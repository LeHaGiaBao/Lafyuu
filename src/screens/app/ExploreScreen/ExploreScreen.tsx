import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeHeader from '../../../layouts/HomeHeader';

function ExploreScreen() {
    return (
        <View style={styles.exploreScreen}>
            <View style={styles.homeHeader}>
                <HomeHeader />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    exploreScreen: {
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
})

export default ExploreScreen;