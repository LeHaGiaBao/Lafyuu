import React, {memo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import PlusSvgIcon from '@assets/Calculate/Plus.svg';
import {BackgroundColor, NeutralColor} from '@constants';
import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';

function AddPhoto() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'mixed',
            },
            (response: ImagePickerResponse) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const source = {uri: response};
                    setImage(source.uri);
                }
            },
        );
    };

    return (
        <View>
            {image && <Image src={image} style={styles.imageShow} />}
            {!image && (
                <TouchableOpacity onPress={pickImage} style={styles.buttonContainer}>
                    <PlusSvgIcon width={24} height={24} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 72,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BackgroundColor.WhiteColor,
        borderColor: NeutralColor.LightColor,
        borderWidth: 1,
        borderRadius: 5,
    },
    imageShow: {
        width: 72,
        height: 72,
        borderRadius: 5,
    },
});

export default memo(AddPhoto);
