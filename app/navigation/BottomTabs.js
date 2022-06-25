import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../assets/styles/colors';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

import HomeScreen from '../screens/Home/Home';
import MyOrdersScreen from '../screens/MyOrders/MyOrders';
import SettingsScreen from '../screens/Settings/Settings';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar {...props} />}
      initialRouteName={'HomeStackNavigator'}
      screenOptions={({route}) => ({
        tabBarStyle: {
          // borderTopEndRadius: 25,
          // borderTopStartRadius: 25,
          backgroundColor: colors.white,
          height: 60,
        },

        tabBarIcon: ({focused, color, size}) => {
          const _color = focused ? colors.white : color;
          if (route.name === 'Home') {
            return (
              <View style={focused ? styles.tabBar : null}>
                <Feather
                  name={'home'}
                  size={focused ? size - 5 : size}
                  color={_color}
                />
              </View>
            );
          } else if (route.name === 'MyOrders') {
            return (
              <View style={focused ? styles.tabBar : null}>
                <Feather
                  name={'layers'}
                  size={focused ? size - 5 : size}
                  color={_color}
                />
              </View>
            );
          } else if (route.name === 'Settings') {
            return (
              <View style={focused ? styles.tabBar : null}>
                <Octicons
                  name={'person'}
                  size={focused ? size - 5 : size}
                  color={_color}
                />
              </View>
            );
          }
        },
        tabBarLabel: ({focused, color}) => {
          const _color = focused ? colors.primary : color;
          return (
            <Text style={[styles.tabBarLabel, {color: _color}]}>
              {t(route.name)}
            </Text>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyOrders" component={MyOrdersScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 3,
    paddingBottom: 5,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  tabBarLabel: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
  },
});
export default BottomTabs;
