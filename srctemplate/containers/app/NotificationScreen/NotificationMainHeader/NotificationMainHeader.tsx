import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NeutralColor } from '../../../../constants/colors';
import { FontFamily, FontSize } from '../../../../constants/fonts';
import { icon, searchIcon } from '../../../../assets';
import ArrowBack from '../../../../components/Arrow/ArrowBack';

function NotificationMainHeader({ navigation }: any) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.gridColumn} >
                <ArrowBack navigation={navigation} />
                <Text style={styles.title}>Notification</Text>
            </View>
            <View style={styles.gridColumnIcon}>
                <Image source={searchIcon.searchIcon} style={styles.iconSearch} />
                <Image source={icon.moreIcon} />
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
        fontSize: FontSize.FontSize16,
        color: NeutralColor.DarkColor,
    },
    gridColumnIcon: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        gap: 16,
    },
    iconSearch: {
        height: 24,
        width: 24,
    }
})

export default NotificationMainHeader;