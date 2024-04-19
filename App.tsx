import React from 'react';
import {enableFreeze} from 'react-native-screens';
import {Text, View} from 'react-native';

enableFreeze(true);

function App(): React.JSX.Element {
    return (
        <View>
            <Text>ABCD</Text>
        </View>
    );
}

export default App;
