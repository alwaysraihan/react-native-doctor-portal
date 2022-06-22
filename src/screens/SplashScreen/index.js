import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
const SplashScreen = () => {
  return (
    <View style={styles.flex1}>
      {/* <Image
        style={styles.image}
        source={require('../../res/images/Illustrations/doctor.png')}
      /> */}

      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}>
        <LottieView
          style={styles.container}
          source={require('../../res/lottie/online-doctor-app.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.title}>Doctor Portal</Text>
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
  // image: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 20,
  //   backgroundColor: colors.primary,
  // },
  title: {
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    marginTop: 10,
  },
  container: {
    height: 200,
    width: 200,
  },
});
