import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../../res/fonts';
import {colors} from '../../../res/colors';

const Button = () => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>Get Started</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    backgroundColor: colors.primary,
    height: 50,
    width: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.white,
    textAlign: 'center',
  },
});
