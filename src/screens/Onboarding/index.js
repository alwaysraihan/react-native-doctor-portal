import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Onbaording = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../res/images/Illustrations/doctor.png')}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default Onbaording;

const styles = StyleSheet.create({});
