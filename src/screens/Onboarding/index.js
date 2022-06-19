import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {colors} from '../../res';

const Skip = ({...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{marginLeft: 20, fontWeight: 'bold', color: 'yellow'}}>
      Skip
    </Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{marginRight: 20, fontWeight: 'bold', color: 'blue'}}>
      Next
    </Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: colors.primary,
      borderBottomStartRadius: 20,
      borderTopEndRadius: 20,
      marginRight: 5,
    }}>
    <Text
      style={{
        marginHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
      }}>
      Get Started
    </Text>
  </TouchableOpacity>
);
const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
      }}></View>
  );
};
const Onbaording = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('MainApp')}
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
