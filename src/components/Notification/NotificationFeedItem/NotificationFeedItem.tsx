import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { NeutralColor } from '../../../constants/colors';

type NotiFeedProps = {
    image: any,
    title: string,
    content: string,
    time: string
}

function NotificationFeedItem(items: NotiFeedProps) {
    return (
        <View style={styles.item}>
            <View style={styles.listItem}>
                <View style={styles.listContent}>
                    <Image source={items.image} style={styles.image} />
                    <View style={styles.contentStyle}>
                        <Text style={styles.contentText}>{items.title}</Text>
                        <Text style={styles.notificationContent}>{items.content}</Text>
                        <Text style={styles.notificationTime}>{items.time}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        height: 120,
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
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginRight: 16,
        resizeMode: 'cover',
    },
    contentStyle: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    contentText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.DarkColor,
    },
    notificationContent: {
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
        width: '90%',
    },
    notificationTime: {
        marginTop: 8,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize10,
        color: NeutralColor.DarkColor,
    }
})

export default NotificationFeedItem;