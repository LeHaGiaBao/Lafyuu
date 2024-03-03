import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { listNotificationIcon } from '../../../assets';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { NeutralColor } from '../../../constants/colors';

type NotiActivityProps = {
    title: string,
    content: string,
    time: string,
}

function NotificationActivityItem(items: NotiActivityProps) {
    return (
        <View style={styles.item}>
            <View style={styles.listItem}>
                <View style={styles.listContent}>
                    <Image source={listNotificationIcon.transactionIcon} style={styles.contentIcon} />
                    <Text style={styles.contentText}>{items.title}</Text>
                </View>
            </View>
            <Text style={styles.notificationContent}>{items.content}</Text>
            <Text style={styles.notificationTime}>{items.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'column',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
    },
    listContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentIcon: {
        marginRight: 16,
        height: 24,
        width: 24,
    },
    contentText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.DarkColor
    },
    notificationContent: {
        marginLeft: 40,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    notificationTime: {
        marginTop: 8,
        marginLeft: 40,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize10,
        color: NeutralColor.DarkColor,
    }
})

export default NotificationActivityItem;