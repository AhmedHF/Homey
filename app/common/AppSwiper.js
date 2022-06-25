import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import image from '../assets/images/image.jpg';
import colors from '../assets/styles/colors';

const AppSwiper = props => {
  const {data} = props;
  return (
    <Swiper
      style={styles.wrapper}
      autoplay
      dot={
        <View
          style={{
            backgroundColor: '#525358',
            width: 6,
            height: 3,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: colors.white,
            width: 16,
            height: 3,
            borderRadius: 2,
          }}
        />
      }>
      {data.map((item, index) => {
        return (
          <View style={styles.slide1}>
            <ImageBackground source={image} style={styles.image}>
              <Text style={styles.text}>
                Home
                <Text style={[styles.text, {color: colors.primary}]}>y</Text>
              </Text>
            </ImageBackground>
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
  },
});

export default AppSwiper;
