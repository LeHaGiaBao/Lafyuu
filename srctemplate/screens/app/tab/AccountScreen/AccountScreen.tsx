import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AccountList from '../../../../containers/app/AccountScreen/AccountList';
import {BackgroundColor, NeutralColor} from '../../../../constants/colors';
import {FontFamily} from '../../../../constants/fonts';

function AccountScreen({navigation}: any) {
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
        borderBottomColor: NeutralColor.LightColor,
        borderTopColor: BackgroundColor.WhiteColor,
        borderLeftColor: BackgroundColor.WhiteColor,
        borderRightColor: BackgroundColor.WhiteColor,
        borderWidth: 1,
    },
    scrollView: {
        width: '100%',
        marginHorizontal: 20,
    },
    title: {
        fontFamily: FontFamily.FontBold,
        fontSize: 16,
        color: NeutralColor.DarkColor,
    },
});

export default AccountScreen;
