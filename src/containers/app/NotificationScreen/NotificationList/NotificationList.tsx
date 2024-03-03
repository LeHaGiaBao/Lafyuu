import React, { useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackgroundColor, NeutralColor, PrimaryColor } from '../../../../constants/colors';
import { FontFamily, FontSize } from '../../../../constants/fonts';
import { listNotificationIcon } from '../../../../assets';

function NotificationList({ navigation }: any) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const handlePressIn = (ref: any) => {
        ref.current.setNativeProps({
            style: { backgroundColor: '#EBF0FF' }
        });
    };

    const handlePressOut = (ref: any) => {
        ref.current.setNativeProps({
            style: { backgroundColor: 'transparent' }
        });
    };

    return (
        <View style={styles.listContainer}>
            <TouchableOpacity
                ref={ref1}
                onPressIn={() => handlePressIn(ref1)}
                onPressOut={() => handlePressOut(ref1)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationOffer')}
            >
                <View style={styles.listContent}>
                    <Image source={listNotificationIcon.offerIcon} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Offer</Text>
                </View>
                <View style={styles.notificationCount}>
                    <Text style={styles.notificationCountText}>3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref2}
                onPressIn={() => handlePressIn(ref2)}
                onPressOut={() => handlePressOut(ref2)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationFeed')}
            >
                <View style={styles.listContent}>
                    <Image source={listNotificationIcon.feedIcon} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Feed</Text>
                </View>
                <View style={styles.notificationCount}>
                    <Text style={styles.notificationCountText}>3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref3}
                onPressIn={() => handlePressIn(ref3)}
                onPressOut={() => handlePressOut(ref3)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationActivity')}
            >
                <View style={styles.listContent}>
                    <Image source={listNotificationIcon.bellIcon} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Activity</Text>
                </View>
                <View style={styles.notificationCount}>
                    <Text style={styles.notificationCountText}>3</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '100%',
    },
    listItem: {
        paddingLeft: 16,
        paddingRight: 16,
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
        color: PrimaryColor.BlueColor
    },
    contentText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.DarkColor,
    },
    notificationCount: {
        justifyContent: 'center',
        height: 20,
        width: 20,
        backgroundColor: PrimaryColor.RedColor,
        borderRadius: 100,
    },
    notificationCountText: {
        textAlign: 'center',
        color: BackgroundColor.WhiteColor,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize10,
    }
})

export default NotificationList;