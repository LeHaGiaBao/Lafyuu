import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../../../containers/app/HomeScreen/HomeHeader';

function HomeScreen() {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <HomeHeader />
            </View>
            <View style={styles.homeScreenContainer}>

            </View>
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
    homeScreenContainer: {
        marginLeft: 16,
        marginRight: 16,
    }
})

export default HomeScreen;