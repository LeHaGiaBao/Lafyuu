import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function NotificationHeader({ navigation }: any) {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.gridColumn}>
                    <MaterialIcons
                        name='arrow-back-ios'
                        size={24}
                        style={styles.iconStyle}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.title}>Notification</Text>
                </View>
                <View style={styles.gridColumnIcon}>
                    <Feather
                        name='search'
                        size={24}
                        style={styles.iconStyle}
                    />
                    <MaterialCommunityIcons
                        name='dots-vertical'
                        size={24}
                        style={styles.iconStyle}
                    />
                </View>
            </View>
        </>
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
    iconStyle: {
        color: '#9098B1',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    },
    gridColumnIcon: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        gap: 16,
    }
})

export default NotificationHeader;