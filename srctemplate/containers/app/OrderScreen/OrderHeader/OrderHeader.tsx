import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function OrderHeader({ title, navigation }: any) {
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
    iconStyle: {
        color: '#9098B1',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    }
})

export default OrderHeader;