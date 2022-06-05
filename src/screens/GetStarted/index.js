import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DoctorImg} from '../../res/images/Illustrations/inex';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

const GetStarted = () => {
  return (
    <View style={styles.mainScreen}>
      <Image source={DoctorImg} style={styles.heroImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Booking Your Doctor</Text>
        <Text style={styles.titleText}>Online</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: colors.primary,
          height: 50,
          width: 250,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Get Started</Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {height: 225, width: '100%', resizeMode: 'stretch'},
  titleContainer: {
    marginTop: 50,
  },
  titleText: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
});
