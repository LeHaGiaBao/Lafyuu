import React, {memo} from 'react';
import {enableFreeze} from 'react-native-screens';
import {StyleSheet, Text, View} from 'react-native';
import {BackgroundColor} from '@constants/colors';

enableFreeze(true);

function App(): React.JSX.Element {
    return (
        <View style={styles.backgroundAppColor}>
            <Text>ABCD</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundAppColor: {
        backgroundColor: BackgroundColor.WhiteColor,
    },
});

export default memo(App);
