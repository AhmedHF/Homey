import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },
});

export default Settings;
