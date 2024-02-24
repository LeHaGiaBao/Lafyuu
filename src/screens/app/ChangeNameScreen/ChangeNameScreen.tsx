
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AccountHeader from '../../../containers/app/AccountScreen/AccountHeader';

function ChangeNameScreen({ navigation }: any) {
    const [firstNameFocus, setFirstNameFocus] = useState(false)
    const [lastNameFocus, setLastNameFocus] = useState(false)

    return (
        <View style={styles.changeNameScreen}>
            <View style={styles.changeNameHeader}>
                <AccountHeader title="Name" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.flexView}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>FirstName</Text>
                        <TextInput
                            placeholder='Maximus'
                            autoCapitalize="none"
                            style={firstNameFocus ? styles.inputContainerFocus : styles.inputContainer}
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                        />
                    </View>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>LastName</Text>
                        <TextInput
                            placeholder='Gold'
                            autoCapitalize="none"
                            style={lastNameFocus ? styles.inputContainerFocus : styles.inputContainer}
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                        />
                    </View>
                </View>
            </ScrollView>
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
        gap: 24,
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
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
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
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
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
})

export default ChangeNameScreen;