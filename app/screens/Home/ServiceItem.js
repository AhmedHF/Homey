import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../../common/AppText';
import Blacksmith from '../../assets/svg/blacksmith.svg';
import Carpentry from '../../assets/svg/carpentry.svg';
import Conditioners from '../../assets/svg/conditioners.svg';
import Electricity from '../../assets/svg/electricity.svg';
import Plumbing from '../../assets/svg/plumbing.svg';
import Receivers from '../../assets/svg/receivers.svg';
import colors from '../../assets/styles/colors';

// create a component
const ServiceItem = props => {
  const {title, icon} = props;
  const Icon = useMemo(() => {
    if (icon === 'Blacksmith') return Blacksmith;
    if (icon === 'Carpentry') return Carpentry;
    if (icon === 'Conditioners') return Conditioners;
    if (icon === 'Electricity') return Electricity;
    if (icon === 'Plumbing') return Plumbing;
    if (icon === 'Receivers') return Receivers;
  }, [icon]);

  return (
    <View key={title + icon} style={styles.container}>
      <AppText style={{fontSize: 17}}>{title}</AppText>
      <View style={styles.icon}>
        <Icon width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 88,
    width: 173,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#f4f5f6',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 52,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});

export default ServiceItem;
