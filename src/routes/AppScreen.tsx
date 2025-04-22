import React, {memo} from 'react';
import {Text, View} from 'react-native';

function AppScreen() {
  return (
    <View>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
    </View>
  );
}

export default memo(AppScreen);
