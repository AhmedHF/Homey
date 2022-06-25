import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import '../i18n';

class Navigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <View style={styles.view}>
          <BottomTabs {...this.props} />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Navigator;
