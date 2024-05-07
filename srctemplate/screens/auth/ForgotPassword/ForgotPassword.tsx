import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoContainer from '../../../components/LogoContainer';
import AuthTitle from '../../../components/AuthTitle';
import { BackgroundColor, NeutralColor, PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';
import ForgotPasswordForm from '../../../containers/auth/ForgotPasswordForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ForgotPassword({ navigation }: any): React.JSX.Element {
    return (
        <View style={styles.forgotScreen}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <View style={styles.gridColumn}>
                        <MaterialIcons
                            name='arrow-back-ios'
                            size={24}
                            style={styles.iconStyle}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.title}>Back</Text>
                    </View>
                </View>
            </View>
            <View style={styles.formRecovery}>
                <LogoContainer />
                <AuthTitle title="Welcome to Lafyuu" subTitle="Enter email to recovery password" />
                <ForgotPasswordForm navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    forgotScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    formRecovery: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
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
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    gridColumn: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    iconStyle: {
        color: NeutralColor.GreyColor,
    },
    title: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize16,
        color: NeutralColor.DarkColor,
    },
})

export default ForgotPassword;