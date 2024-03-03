import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NeutralColor } from '../../../../constants/colors';
import { FontFamily, FontSize } from '../../../../constants/fonts';
import { icon, searchIcon } from '../../../../assets';

function NotificationMainHeader({ navigation }: any) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.gridColumn} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={icon.leftIcon}
                        style={styles.iconArrowStyle}
                    />
                </TouchableOpacity>
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
    iconArrowStyle: {
        marginRight: 10,
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