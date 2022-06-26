import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import Navigator from './navigation/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Disabled console warnings
LogBox.ignoreAllLogs(true);

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </SafeAreaProvider>
    );
  }
}

export default App;
