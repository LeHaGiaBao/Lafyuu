import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

function AccountList({ navigation }: any) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

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
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <View style={styles.listContent}>
                    <MaterialCommunityIcons name='account-outline' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref2}
                onPressIn={() => handlePressIn(ref2)}
                onPressOut={() => handlePressOut(ref2)}
                activeOpacity={0.8}
                style={styles.listItem}
            >
                <View style={styles.listContent}>
                    <Feather name='shopping-bag' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Order</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref3}
                onPressIn={() => handlePressIn(ref3)}
                onPressOut={() => handlePressOut(ref3)}
                activeOpacity={0.8}
                style={styles.listItem}
            >
                <View style={styles.listContent}>
                    <Ionicons name='location-outline' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Address</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref4}
                onPressIn={() => handlePressIn(ref4)}
                onPressOut={() => handlePressOut(ref4)}
                activeOpacity={0.8}
                style={styles.listItem}
            >
                <View style={styles.listContent}>
                    <Feather name='credit-card' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Payment</Text>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
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
})

export default AccountList;