import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FavoriteHeader from '../../../containers/app/HomeScreen/FavoriteHeader';
import FavoriteList from '../../../containers/app/HomeScreen/FavoriteList';

function FavoriteProductScreen({ navigation }: any) {
    return (
        <View style={styles.favoriteScreen}>
            <View style={styles.favoriteHeader}>
                <FavoriteHeader navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <FavoriteList />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    favoriteScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
    },
    favoriteHeader: {
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

export default FavoriteProductScreen;