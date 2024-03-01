import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AccountList from '../../../../containers/app/AccountScreen/AccountList';

function AccountScreen({ navigation }: any) {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <Text style={styles.title}>Account</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <AccountList navigation={navigation} />
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
        marginLeft: 16,
        width: '100%',
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

export default AccountScreen;