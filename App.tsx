import React, {memo} from 'react';
import {enableFreeze} from 'react-native-screens';
import {StyleSheet, Text, View} from 'react-native';
import {BackgroundColor} from '@constants/colors';
import {SelectGenderForm} from '@components';

enableFreeze(true);

function App(): React.JSX.Element {
    return (
        <View style={styles.backgroundAppColor}>
            <Text>ABCD</Text>
            <Text>ABCD</Text>
            <Text>ABCD</Text>
            <SelectGenderForm />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundAppColor: {
        margin: 16,
        backgroundColor: BackgroundColor.WhiteColor,
    },
});

export default memo(App);
