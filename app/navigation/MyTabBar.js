import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../assets/styles/colors';

const MyTabBar = ({state, descriptors, navigation}) => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        height: 60,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                color: isFocused ? colors.primary : colors.black,
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'Tajawal-Medium',
              }}>
              {t(label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
