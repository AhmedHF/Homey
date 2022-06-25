import React from 'react';
import {LogBox} from 'react-native';

import Navigator from './navigation/Navigator';

// Disabled console warnings
LogBox.ignoreAllLogs(true);

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Navigator />;
  }
}

export default App;
