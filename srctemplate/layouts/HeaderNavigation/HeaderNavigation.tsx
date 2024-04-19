import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ArrowBack from '../../components/Arrow/ArrowBack';
import {FontFamily} from '../../constants/fonts';
import {NeutralColor} from '../../constants/colors';

function HeaderNavigation({title, navigation}: any) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.gridColumn}>
                <ArrowBack navigation={navigation} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    gridColumn: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    title: {
        fontFamily: FontFamily.FontBold,
        fontSize: 16,
        color: NeutralColor.DarkColor,
    },
});

export default HeaderNavigation;
