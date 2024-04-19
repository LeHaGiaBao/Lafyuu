import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NeutralColor, PrimaryColor} from '../../../../constants/colors';
import {FontFamily} from '../../../../constants/fonts';
import {accountScreenIcon} from '../../../../assets';

function AccountList({navigation}: any) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const handlePressIn = (ref: any) => {
        ref.current.setNativeProps({
            style: {backgroundColor: NeutralColor.LightColor},
        });
    };

    const handlePressOut = (ref: any) => {
        ref.current.setNativeProps({
            style: {backgroundColor: 'transparent'},
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
                onPress={() => navigation.navigate('ProfileScreen')}>
                <View style={styles.listContent}>
                    <Image
                        source={accountScreenIcon.profileIcon}
                        style={styles.contentIcon}
                    />
                    <Text style={styles.contentText}>Profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref2}
                onPressIn={() => handlePressIn(ref2)}
                onPressOut={() => handlePressOut(ref2)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('OrderScreen')}>
                <View style={styles.listContent}>
                    <Image
                        source={accountScreenIcon.orderIcon}
                        style={styles.contentIcon}
                    />
                    <Text style={styles.contentText}>Order</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref3}
                onPressIn={() => handlePressIn(ref3)}
                onPressOut={() => handlePressOut(ref3)}
                activeOpacity={0.8}
                style={styles.listItem}>
                <View style={styles.listContent}>
                    <Image
                        source={accountScreenIcon.addressIcon}
                        style={styles.contentIcon}
                    />
                    <Text style={styles.contentText}>Address</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref4}
                onPressIn={() => handlePressIn(ref4)}
                onPressOut={() => handlePressOut(ref4)}
                activeOpacity={0.8}
                style={styles.listItem}>
                <View style={styles.listContent}>
                    <Image
                        source={accountScreenIcon.paymentIcon}
                        style={styles.contentIcon}
                    />
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
        color: PrimaryColor.BlueColor,
    },
    contentText: {
        fontFamily: FontFamily.FontBold,
        fontSize: 12,
        color: NeutralColor.DarkColor,
    },
});

export default AccountList;
