import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DoctorImg} from '../../res/images/Illustrations/index';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {Button, WhiteSpace} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.mainScreen}>
      <Image source={DoctorImg} style={styles.heroImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Booking Your Best</Text>
        <Text style={styles.titleText}>Doctor</Text>
      </View>
      <WhiteSpace height={90} />
      <Button onPress={() => navigation.replace('MainApp')} />
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
