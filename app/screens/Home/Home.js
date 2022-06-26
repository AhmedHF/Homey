import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  I18nManager,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../assets/styles/colors';
import AppSwiper from '../../common/AppSwiper';
import AppText from '../../common/AppText';
import ServiceItem from './ServiceItem';

const Home = () => {
  const {t} = useTranslation();
  const [swiperData, setSwiperData] = useState([1, 2, 3]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swipeContainer}>
        <AppSwiper data={swiperData} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.loc}>
          <Ionicons name={'location-sharp'} size={20} color="#a6a3a6" />
        </View>
        <TextInput
          style={styles.input}
          placeholder={t('searchLocation')}
          placeholderTextColor={colors.black}
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
        />
        <MaterialIcons name={'my-location'} size={20} color={colors.black} />
      </View>

      <View style={styles.view}>
        <AppText style={styles.title}>{t('chooseService')}</AppText>
        <View style={styles.services}>
          <ServiceItem title={t('plumbing')} icon={'Plumbing'} />
          <View style={{width: 12}} />
          <ServiceItem title={t('conditioners')} icon={'Conditioners'} />
        </View>
        <View style={styles.services}>
          <ServiceItem title={t('carpentry')} icon={'Carpentry'} />
          <View style={{width: 12}} />
          <ServiceItem title={t('electricity')} icon={'Electricity'} />
        </View>
        <View style={styles.services}>
          <ServiceItem title={t('receivers')} icon={'Receivers'} />
          <View style={{width: 12}} />
          <ServiceItem title={t('blacksmith')} icon={'Blacksmith'} />
        </View>
      </View>
      <View style={{height: 30}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  swipeContainer: {
    height: 252,
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: 21,
    color: colors.black,
    marginTop: 5,
    marginBottom: 15,
  },
  view: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'flex-start',
  },
  services: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 27,
    elevation: 5,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: 48,
    borderColor: colors.black,
    direction: 'rtl',
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },
  loc: {
    backgroundColor: '#c0bdc0',
    borderWidth: 0.8,
    marginRight: 3,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
});

export default Home;
