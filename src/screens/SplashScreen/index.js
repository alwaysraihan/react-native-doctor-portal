import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
const SplashScreen = () => {
  return (
    <View style={styles.flex1}>
      <Image
        style={styles.image}
        source={require('../../res/images/Illustrations/doctor.png')}
      />
      <LottieView
        source={require('../../res/lottie/doctors.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 150,
    height: 150,
  },
});
