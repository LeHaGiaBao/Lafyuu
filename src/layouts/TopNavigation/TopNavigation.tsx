import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { NeutralColor, PrimaryColor } from '../../constants/colors';
import { FontFamily, FontSize } from '../../constants/fonts';
import { heartIcon, notificationIcon, searchIcon } from '../../assets';
import { Badge } from 'react-native-paper';

function TopNavigation({ navigation }: any) {
    const [focus, setFocus] = useState(false)
    const [badgeCount, setBadgeCount] = useState(1)

    let borderStyles
    switch (focus) {
        case true:
            borderStyles = styles.focusBorder
            break
        case false:
            borderStyles = styles.defaultBorder
            break
    }

    return (
        <View style={styles.navigationContainer}>
            <View style={[styles.inputContainer, borderStyles]}>
                <Image source={searchIcon.searchIconFocus} style={styles.iconStyle} />
                <TextInput
                    placeholder="Search product"
                    autoCapitalize="none"
                    style={styles.inputBox}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </View>
            <View style={styles.iconHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('FavoriteScreen')}>
                    <Image source={heartIcon.heartIcon} style={styles.iconHeart} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}
                >
                    <Image source={notificationIcon.notificationIcon} />
                    {
                        badgeCount > 0 && (
                            <Badge
                                size={10}
                                style={{
                                    position: 'absolute',
                                    backgroundColor: PrimaryColor.RedColor,
                                }}
                            />
                        )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '75%',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    defaultBorder: {
        borderColor: NeutralColor.LightColor,
    },
    focusBorder: {
        borderColor: PrimaryColor.BlueColor
    },
    iconStyle: {
        marginRight: 10,
    },
    inputBox: {
        marginLeft: 10,
        width: '85%',
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    iconHeader: {
        width: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconHeart: {
        marginRight: 20,
    },
})

export default TopNavigation;