import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

function ProfileList({ navigation }: any) {
    const [gender, setGender] = useState('Male')

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

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
                onPress={() => navigation.navigate('ChangeGender')}
            >
                <View style={styles.listContent}>
                    <MaterialCommunityIcons name={`${gender === 'Male' ? 'gender-female' : 'gender-male'}`} size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Gender</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>Male</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={24}
                        style={styles.iconStyle}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref2}
                onPressIn={() => handlePressIn(ref2)}
                onPressOut={() => handlePressOut(ref2)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangeBirthday')}
            >
                <View style={styles.listContent}>
                    <FontAwesome name="calendar-o" size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Birthday</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>12-12-2000</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={24}
                        style={styles.iconStyle}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref3}
                onPressIn={() => handlePressIn(ref3)}
                onPressOut={() => handlePressOut(ref3)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangeEmail')}
            >
                <View style={styles.listContent}>
                    <Feather name="mail" size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Email</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>Derlaxy@yahoo.com</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={24}
                        style={styles.iconStyle}
                    />
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
                    <Feather name="smartphone" size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Phone Number</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>(307) 555-0133</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={24}
                        style={styles.iconStyle}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref5}
                onPressIn={() => handlePressIn(ref5)}
                onPressOut={() => handlePressOut(ref5)}
                activeOpacity={0.8}
                style={styles.listItem}
            >
                <View style={styles.listContent}>
                    <Feather name="lock" size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>Change Password</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>•••••••••••••••••</Text>
                    <MaterialIcons
                        name='arrow-forward-ios'
                        size={24}
                        style={styles.iconStyle}
                    />
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
        color: '#40BFFF',
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#223263',
    },
    listContentData: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    contentData: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    iconStyle: {
        color: '#9098B1',
    },
})

export default ProfileList;