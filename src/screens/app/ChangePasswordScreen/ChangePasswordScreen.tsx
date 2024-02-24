
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AccountHeader from '../../../containers/app/AccountScreen/AccountHeader';
import Feather from 'react-native-vector-icons/Feather';

function ChangePasswordScreen({ navigation }: any) {
    const [oldEmailFocus, setOldEmailFocus] = useState(false)
    const [newEmailFocus, setNewEmailFocus] = useState(false)
    const [reEmailFocus, setReEmailFocus] = useState(false)
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <View style={styles.changeEmailScreen}>
            <View style={styles.changeEmailHeader}>
                <AccountHeader title="Change Password" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewContainer}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>Old Password</Text>
                        <View style={oldEmailFocus ? styles.inputContainerFocus : styles.inputContainer}>
                            <Feather name="lock" size={24} style={oldEmailFocus ? styles.iconStylesFocus : styles.iconStyles} />
                            <TextInput
                                placeholder='Derlaxy@yahoo.com'
                                autoCapitalize="none"
                                style={styles.inputBox}
                                onFocus={() => setOldEmailFocus(true)}
                                onBlur={() => setOldEmailFocus(false)}
                            />
                        </View>
                        {
                            active && (
                                <Text style={styles.notiSendText}> Oops! Your Password Is Not Correct </Text>
                            )
                        }
                    </View>
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>New Password</Text>
                        <View style={newEmailFocus ? styles.inputContainerFocus : styles.inputContainer}>
                            <Feather name="lock" size={24} style={newEmailFocus ? styles.iconStylesFocus : styles.iconStyles} />
                            <TextInput
                                placeholder='Derlaxy@yahoo.com'
                                autoCapitalize="none"
                                style={styles.inputBox}
                                onFocus={() => setNewEmailFocus(true)}
                                onBlur={() => setNewEmailFocus(false)}
                            />
                        </View>
                        {
                            active && (
                                <Text style={styles.notiSendText}> Oops! Your Password Is Not Correct </Text>
                            )
                        }
                    </View>
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>New Password Again</Text>
                        <View style={reEmailFocus ? styles.inputContainerFocus : styles.inputContainer}>
                            <Feather name="lock" size={24} style={reEmailFocus ? styles.iconStylesFocus : styles.iconStyles} />
                            <TextInput
                                placeholder='Derlaxy@yahoo.com'
                                autoCapitalize="none"
                                style={styles.inputBox}
                                onFocus={() => setReEmailFocus(true)}
                                onBlur={() => setReEmailFocus(false)}
                            />
                        </View>
                        {
                            active && (
                                <Text style={styles.notiSendText}> Oops! Your Password Is Not Correct </Text>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={toggleActive}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    changeEmailScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
    },
    changeEmailHeader: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderBottomColor: '#EBF0FF',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
    },
    scrollView: {
        width: '100%',
        marginHorizontal: 20,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 12,
    },
    viewContainer: {
        marginTop: 12,
        marginBottom: 12,
    },
    changeData: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    nameTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#223263',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
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
        width: '100%',
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
        color: '#9098B1',
        marginRight: 10,
    },
    iconStylesFocus: {
        color: '#40BFFF',
        marginRight: 10,
    },
    inputBox: {
        paddingTop: 3,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#9098B1',
    },
    notiSendText: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#FB7181',
    },
    buttonView: {
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#40BFFF',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        shadowColor: 'rgba(64, 191, 255, 0.24)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 30,
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'white',
    },
})

export default ChangePasswordScreen;