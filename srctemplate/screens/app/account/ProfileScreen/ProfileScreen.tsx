import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AccountHeader from '../../../../containers/app/AccountScreen/AccountHeader';
import ProfileList from '../../../../containers/app/AccountScreen/ProfileList';
import {BackgroundColor, NeutralColor} from '../../../../constants/colors';
import {FontFamily, FontSize} from '../../../../constants/fonts';

function ProfileScreen({navigation}: any) {
    return (
        <View style={styles.profileScreen}>
            <View style={styles.profileHeader}>
                <AccountHeader title="Profile" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <TouchableOpacity
                    style={styles.profileContent}
                    onPress={() => navigation.navigate('ChangeName')}>
                    <Image
                        source={require('../../../../../assets/Profile/Profile.png')}
                        style={styles.avatar}
                    />
                    <View style={styles.profile}>
                        <Text style={styles.profileName}>Maximus Gold</Text>
                        <Text style={styles.profileUserName}>@derlaxy</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.profileList}>
                    <ProfileList navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    profileScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
    },
    profileHeader: {
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
    },
    profileContent: {
        marginTop: 24,
        marginLeft: 16,
        marginRight: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 100,
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    profileName: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize16,
        color: NeutralColor.DarkColor,
    },
    profileUserName: {
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    profileList: {
        marginTop: 32,
    },
});

export default ProfileScreen;
