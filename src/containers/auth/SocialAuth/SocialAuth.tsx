import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SocialAuth() {
    return (
        <View style={styles.social}>
            <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                <Image
                    source={require('../../../../assets/Icon/icons8-google-480.png')}
                    style={styles.GoogleIcon}
                />
                <Text style={styles.socialText}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialFacebookButton} onPress={() => { }}>
                <FontAwesome name='facebook' size={24} style={styles.facebookIcon} />
                <Text style={styles.socialText}>Login with facebook</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    social: {
        marginTop: 16,
        width: '100%',
    },
    socialButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#EBF0FF',
    },
    socialText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
        width: '100%',
        textAlign: 'center',
    },
    GoogleIcon: {
        height: 24,
        width: 24,
        marginLeft: 16,
    },
    socialFacebookButton: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#EBF0FF',
    },
    facebookIcon: {
        height: 24,
        width: 24,
        marginLeft: 16,
        color: '#4092FF'
    },
})

export default SocialAuth;