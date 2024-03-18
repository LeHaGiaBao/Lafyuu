import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icon, profileScreenIcon} from '../../../../assets';
import {NeutralColor, PrimaryColor} from '../../../../constants/colors';
import {FontFamily, FontSize} from '../../../../constants/fonts';

function ProfileList({navigation}: any) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const handlePressIn = (ref: any) => {
        ref.current.setNativeProps({
            style: {backgroundColor: '#EBF0FF'},
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
                onPress={() => navigation.navigate('ChangeGender')}>
                <View style={styles.listContent}>
                    <Image
                        source={profileScreenIcon.genderIcon}
                        style={styles.iconStyle}
                    />
                    <Text style={styles.contentText}>Gender</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>Male</Text>
                    <Image source={icon.rightIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref2}
                onPressIn={() => handlePressIn(ref2)}
                onPressOut={() => handlePressOut(ref2)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangeBirthday')}>
                <View style={styles.listContent}>
                    <Image
                        source={profileScreenIcon.dateIcon}
                        style={styles.iconStyle}
                    />
                    <Text style={styles.contentText}>Birthday</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>12-12-2000</Text>
                    <Image source={icon.rightIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref3}
                onPressIn={() => handlePressIn(ref3)}
                onPressOut={() => handlePressOut(ref3)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangeEmail')}>
                <View style={styles.listContent}>
                    <Image
                        source={profileScreenIcon.emailIcon}
                        style={styles.iconStyle}
                    />
                    <Text style={styles.contentText}>Email</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>Derlaxy@yahoo.com</Text>
                    <Image source={icon.rightIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref4}
                onPressIn={() => handlePressIn(ref4)}
                onPressOut={() => handlePressOut(ref4)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangePhone')}>
                <View style={styles.listContent}>
                    <Image
                        source={profileScreenIcon.phoneIcon}
                        style={styles.iconStyle}
                    />
                    <Text style={styles.contentText}>Phone Number</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>(307) 555-0133</Text>
                    <Image source={icon.rightIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                ref={ref5}
                onPressIn={() => handlePressIn(ref5)}
                onPressOut={() => handlePressOut(ref5)}
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => navigation.navigate('ChangePassword')}>
                <View style={styles.listContent}>
                    <Image
                        source={profileScreenIcon.phoneIcon}
                        style={styles.iconStyle}
                    />
                    <Text style={styles.contentText}>Change Password</Text>
                </View>
                <View style={styles.listContentData}>
                    <Text style={styles.contentData}>•••••••••••••••••</Text>
                    <Image source={icon.rightIcon} />
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
        color: PrimaryColor.BlueColor,
    },
    contentText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.DarkColor,
    },
    listContentData: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    contentData: {
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    iconStyle: {
        marginRight: 10,
    },
});

export default ProfileList;
