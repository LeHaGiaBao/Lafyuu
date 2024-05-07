import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderNavigation from '../../../../layouts/HeaderNavigation';
import {BackgroundColor, NeutralColor} from '../../../../constants/colors';
import InputBox from '../../../../components/Input/InputBox';
import ButtonBlue from '../../../../components/Button/ButtonBlue';

function ChangeNameScreen({navigation}: any) {
    return (
        <View style={styles.changeNameScreen}>
            <View style={styles.changeNameHeader}>
                <HeaderNavigation title="Name" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.flexView}>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>FirstName</Text>
                        <InputBox placeholder="Maximus" />
                    </View>
                    <View style={styles.changeData}>
                        <Text style={styles.nameTitle}>LastName</Text>
                        <InputBox placeholder="Gold" />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonView}>
                <ButtonBlue title="Save" />
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
    buttonView: {
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
    },
});

export default ChangeNameScreen;
