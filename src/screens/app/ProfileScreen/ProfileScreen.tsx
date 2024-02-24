
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import AccountHeader from '../../../containers/app/AccountScreen/AccountHeader';
import ProfileList from '../../../containers/app/AccountScreen/ProfileList';

function ProfileScreen({ navigation }: any) {
    return (
        <View style={styles.profileScreen}>
            <View style={styles.profileHeader}>
                <AccountHeader title="Profile" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.profileContent}>
                    <Image source={require('../../../../assets/Profile/Profile.png')} style={styles.avatar} />
                    <View style={styles.profile}>
                        <Text style={styles.profileName}>Maximus Gold</Text>
                        <Text style={styles.profileUserName}>@derlaxy</Text>
                    </View>
                </View>
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
        borderBottomColor: '#EBF0FF',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
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
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    },
    profileUserName: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    profileList: {
        marginTop: 32,
    }
})

export default ProfileScreen;