
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountHeader from '../../../containers/app/AccountScreen/AccountHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Calendar, LocaleConfig } from 'react-native-calendars';

function ChangeBirthdayScreen({ navigation }: any) {
    const [selected, setSelected] = useState('12/12/2020');
    const [dropdownFocus, setDropdownFocus] = useState(false)
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownFocus(!dropdownFocus)
        setVisible(!visible);
    };

    return (
        <View style={styles.changeNameScreen}>
            <View style={styles.changeNameHeader}>
                <AccountHeader title="Birthday" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.flexView}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>Your Birhday</Text>
                        <TouchableOpacity
                            style={dropdownFocus ? styles.inputContainerFocus : styles.inputContainer}
                            onPress={toggleDropdown}
                        >
                            <Text style={styles.boxText}>{selected}</Text>
                            <FontAwesome name="calendar-o" size={20} style={dropdownFocus ? styles.iconStyleFocus : styles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                    {
                        visible && (
                            <View style={styles.dropdown}>
                                <Calendar
                                    onDayPress={(day) => {
                                        setSelected(day.dateString);
                                    }}
                                    markingType={'custom'}
                                    markedDates={{
                                        [selected]: {
                                            customStyles: {
                                                container: {
                                                    backgroundColor: '#40BFFF',
                                                    borderRadius: 0,
                                                },
                                                text: {
                                                    fontFamily: 'Poppins-Bold',
                                                    color: '#FFFFFF',
                                                    fontWeight: 'bold',
                                                }
                                            }
                                        }
                                    }}
                                    calendarStyle={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                    }}
                                    theme={{
                                        arrowColor: '#9098B1',
                                        arrowHeight: 24,
                                        arrowWidth: 24,
                                        contentStyle: {
                                            borderBlockColor: '#EBF0FF',
                                        },
                                    }}
                                />
                            </View>
                        )
                    }

                </View>
            </ScrollView>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    changeNameScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
    },
    changeNameHeader: {
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
        marginTop: 24,
    },
    flexView: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
    },
    inputContainerFocus: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#40BFFF',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
    },
    boxText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
    },
    iconStyle: {
        color: '#9098B1',
    },
    iconStyleFocus: {
        color: '#40BFFF',
    },
    dropdown: {
        width: '100%',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        borderRadius: 5,
    },
    dropDownText: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        height: 48,
    },
    dropDownTextStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    dropDownTextStyleChoose: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
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

export default ChangeBirthdayScreen;