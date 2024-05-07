import FormText from '@components/Typography/FormText';
import React, {memo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowBottomSvgIcon from '@assets/Arrow/bottom.svg';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';

function SelectGenderForm() {
    const [dropdownFocus, setDropdownFocus] = useState(false);
    const [visible, setVisible] = useState(false);
    const [gender, setGender] = useState('Male');

    const genderData = [
        {
            id: '1',
            title: 'Male',
        },
        {
            id: '2',
            title: 'Female',
        },
        {
            id: '3',
            title: 'Other',
        },
    ];

    const toggleDropdown = () => {
        setDropdownFocus(!dropdownFocus);
        setVisible(!visible);
    };

    const renderItem = ({item}: any) => (
        <TouchableOpacity
            style={styles.renderItem}
            onPress={() => {
                setGender(item.title);
                setVisible(!visible);
            }}>
            <Text
                style={[
                    styles.itemText,
                    {
                        color:
                            item.title === gender ? PrimaryColor.BlueColor : NeutralColor.GreyColor,
                        fontFamily:
                            item.title === gender ? FontFamily.FontBold : FontFamily.FontRegular,
                    },
                ]}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.formContainer}>
            <TouchableOpacity
                style={[
                    styles.touchableOpacityContainer,
                    {borderColor: dropdownFocus ? PrimaryColor.BlueColor : NeutralColor.LightColor},
                ]}
                onPress={() => toggleDropdown()}>
                <FormText text={gender} color="Grey" family="Fill" />
                <ArrowBottomSvgIcon width={24} height={24} />
            </TouchableOpacity>
            {visible && (
                <FlatList
                    data={genderData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    style={styles.dropdown}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    touchableOpacityContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    dropdown: {
        width: '100%',
        height: 144,
        borderColor: NeutralColor.LightColor,
        borderWidth: 1,
        borderRadius: 5,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    renderItem: {
        width: '100%',
        height: 48,
    },
    itemText: {
        fontSize: FontSize.FontSize12,
    },
});

export default memo(SelectGenderForm);
