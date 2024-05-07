import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ArrowBack from '../../../../components/Arrow/ArrowBack';

function NotificationHeader({ title, navigation }: any) {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.gridColumn}>
                    <ArrowBack navigation={navigation} />
                    <Text style={styles.title}>{title}</Text>
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
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    },
})

export default NotificationHeader;