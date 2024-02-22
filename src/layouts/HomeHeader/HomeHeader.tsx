import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Badge } from 'react-native-paper';

function HomeHeader() {
    const [searchFocus, setSearchFocus] = useState(false)
    const [badgeCount, setBadgeCount] = useState(1)

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={searchFocus ? styles.inputContainerFocus : styles.inputContainer}>
                    <Feather name="search" size={24} style={styles.iconStyles} />
                    <TextInput
                        placeholder='Search Product'
                        autoCapitalize="none"
                        style={styles.inputBox}
                        onFocus={() => setSearchFocus(true)}
                        onBlur={() => setSearchFocus(false)}
                    />
                </View>
                <View style={styles.iconHeader}>
                    <AntDesign name="hearto" size={24} style={styles.iconHeart} />
                    <View>
                        <Feather name="bell" size={24} style={styles.iconBell} />
                        {
                            badgeCount > 0 && (
                                <Badge
                                    size={10}
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#FB7181',
                                    }} />
                            )}
                    </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '75%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EBF0FF',
    },
    inputContainerFocus: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '70%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#40BFFF',
    },
    iconStyles: {
        color: '#40BFFF',
        marginRight: 10,
    },
    inputBox: {
        paddingTop: 3,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#9098B1',
    },
    iconHeader: {
        width: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconHeart: {
        color: '#9098B1',
        marginRight: 20,
    },
    iconBell: {
        color: '#9098B1',
    }
})

export default HomeHeader;