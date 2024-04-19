import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NotificationHeader from '../../../../containers/app/NotificationScreen/NotificationHeader';
import NotificationListOffer from '../../../../containers/app/NotificationScreen/NotificationListOffer';
import { BackgroundColor, NeutralColor } from '../../../../constants/colors';

function NotificationOfferScreen({ navigation }: any) {
    return (
        <View style={styles.notificationScreen}>
            <View style={styles.notificationHeader}>
                <NotificationHeader title="Notification" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <NotificationListOffer navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    notificationScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    notificationHeader: {
        width: '100%',
        paddingLeft: 16,
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
})

export default NotificationOfferScreen;