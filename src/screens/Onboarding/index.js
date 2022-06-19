import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Onbaording = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('MainApp')}
      onDone={() => navigation.navigate('MainApp')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              style={styles.image}
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'Get Appoinments',
          subtitle: 'Choice and Book Your Best Doctror.',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              style={styles.image}
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'Get Appoinments',
          subtitle: 'Choice and Book Your Best Doctror.',
        },
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              style={styles.image}
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'EXPLORE NOW',
          subtitle: 'Choice and Book Your Best Doctror.',
        },
      ]}
    />
  );
};

export default Onbaording;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
});
