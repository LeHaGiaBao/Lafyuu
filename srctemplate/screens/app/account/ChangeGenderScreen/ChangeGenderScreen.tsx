import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import HeaderNavigation from '../../../../layouts/HeaderNavigation';
import {icon} from '../../../../assets';
import {
    BackgroundColor,
    NeutralColor,
    PrimaryColor,
} from '../../../../constants/colors';
import {FontFamily, FontSize} from '../../../../constants/fonts';

function ChangeGenderScreen({navigation}: any) {
    const [data, setData] = useState('Male');
    const [dropdownFocus, setDropdownFocus] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownFocus(!dropdownFocus);
        setVisible(!visible);
    };

    return (
        <View style={styles.changeNameScreen}>
            <View style={styles.changeNameHeader}>
                <HeaderNavigation title="Gender" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.flexView}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>Choose Gender</Text>
                        <TouchableOpacity
                            style={
                                dropdownFocus
                                    ? styles.inputContainerFocus
                                    : styles.inputContainer
                            }
                            onPress={toggleDropdown}>
                            <Text style={styles.boxText}>{data}</Text>
                            <Image
                                source={icon.bottomIcon}
                                style={!visible ? null : styles.iconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    {visible && (
                        <View style={styles.dropdown}>
                            <TouchableOpacity
                                style={styles.dropDownText}
                                onPress={() => {
                                    setData('Male');
                                    setVisible(!visible);
                                }}>
                                <Text
                                    style={
                                        data === 'Male'
                                            ? styles.dropDownTextStyleChoose
                                            : styles.dropDownTextStyle
                                    }>
                                    Male
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.dropDownText}
                                onPress={() => {
                                    setData('Female');
                                    setVisible(!visible);
                                }}>
                                <Text
                                    style={
                                        data === 'Female'
                                            ? styles.dropDownTextStyleChoose
                                            : styles.dropDownTextStyle
                                    }>
                                    Female
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.dropDownText}
                                onPress={() => {
                                    setData('Other');
                                    setVisible(!visible);
                                }}>
                                <Text
                                    style={
                                        data === 'Other'
                                            ? styles.dropDownTextStyleChoose
                                            : styles.dropDownTextStyle
                                    }>
                                    Other
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
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
        borderBottomColor: NeutralColor.LightColor,
        borderTopColor: BackgroundColor.WhiteColor,
        borderLeftColor: BackgroundColor.WhiteColor,
        borderRightColor: BackgroundColor.WhiteColor,
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
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.DarkColor,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: NeutralColor.LightColor,
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
        borderColor: PrimaryColor.BlueColor,
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
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.GreyColor,
    },
    iconStyle: {
        transform: [{rotate: '180deg'}],
    },
    dropdown: {
        width: '100%',
        borderColor: NeutralColor.LightColor,
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
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    dropDownTextStyleChoose: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: PrimaryColor.BlueColor,
    },
    buttonView: {
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: PrimaryColor.BlueColor,
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        shadowColor: 'rgba(64, 191, 255, 0.24)',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 1,
        shadowRadius: 30,
    },
    buttonText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: BackgroundColor.WhiteColor,
    },
});

export default ChangeGenderScreen;
