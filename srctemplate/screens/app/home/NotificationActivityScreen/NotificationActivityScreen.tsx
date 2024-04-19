import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NotificationHeader from '../../../../containers/app/NotificationScreen/NotificationHeader';
import NotificationListActivity from '../../../../containers/app/NotificationScreen/NotificationListActivity';
import { BackgroundColor, NeutralColor } from '../../../../constants/colors';

function NotificationActivityScreen({ navigation }: any) {
    return (
        <View style={styles.notificationScreen}>
            <View style={styles.notificationHeader}>
                <NotificationHeader title="Activity" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <NotificationListActivity navigation={navigation} />
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

export default NotificationActivityScreen;