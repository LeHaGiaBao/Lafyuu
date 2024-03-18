import React from 'react';
import RoutesApp from './src/routes/RoutesApp';
import {enableFreeze} from 'react-native-screens';

enableFreeze(true);

function App(): React.JSX.Element {
  return <RoutesApp />;
}

export default App;
