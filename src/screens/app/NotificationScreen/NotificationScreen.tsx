import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NotificationMainHeader from '../../../containers/app/NotificationScreen/NotificationMainHeader';
import NotificationList from '../../../containers/app/NotificationScreen/NotificationList';

function NotificationScreen({ navigation }: any) {
    return (
        <View style={styles.notificationScreen}>
            <View style={styles.notificationHeader}>
                <NotificationMainHeader navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <NotificationList navigation={navigation} />
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
        marginLeft: 16,
        marginRight: 16,
        width: '100%',
        paddingLeft: 16,
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
})

export default NotificationScreen;