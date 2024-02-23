import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

function NotificationList({ navigation }: any) {
    return (
        <View style={styles.listContainer}>
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationOffer')}
            >
                <View style={styles.listContent}>
                    <AntDesign name='tago' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Offer</Text>
                </View>
                <View style={styles.notificationCount}>
                    <Text style={styles.notificationCountText}>3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationFeed')}
            >
                <View style={styles.listContent}>
                    <MaterialCommunityIcons name='text-box-outline' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Feed</Text>
                </View>
                <View style={styles.notificationCount}>
                    <Text style={styles.notificationCountText}>3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('NotificationActivity')}
            >
                <View style={styles.listContent}>
                    <Feather name='bell' size={24} style={styles.contentIcon} />
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
        marginTop: 12,
        width: '100%',
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
        color: '#40BFFF',
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#223263',
    },
    notificationCount: {
        justifyContent: 'center',
        height: 20,
        width: 20,
        backgroundColor: '#FB7181',
        borderRadius: 100,
    },
    notificationCountText: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
    }
})

export default NotificationList;