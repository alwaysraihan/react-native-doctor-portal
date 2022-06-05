import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DoctorImg} from '../../res/images/Illustrations/inex';

const GetStarted = () => {
  return (
    <View style={styles.mainScreen}>
      <Image source={DoctorImg} style={styles.heroImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Booking Your Doctor</Text>
        <Text style={styles.titleText}>Online</Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  mainScreen: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  heroImage: {height: 225, width: '100%', resizeMode: 'stretch'},
  titleContainer: {},
  titleText: {},
});
