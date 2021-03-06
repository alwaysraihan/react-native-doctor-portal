import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import WhiteSpace from '../../atoms/WhiteSpace';
import {colors, fonts, IC_Love} from '../../../res';

const BoxItemTopProduct = ({bgColor, icon, name, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
      <View style={{top: -40}}>
        <View>
          <Image source={icon} style={styles.image} />
          <WhiteSpace height={20} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <WhiteSpace height={20} />
        <View style={styles.price}>
          <Text style={styles.wrapperButton}>${price}</Text>
          <TouchableOpacity>
            <IC_Love />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoxItemTopProduct;

const styles = StyleSheet.create({
  container: bgColor => ({
    height: 160,
    width: 140,
    backgroundColor: bgColor,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 40,
  }),
  text: {
    fontSize: 16,
    color: colors.grey,
    fontFamily: fonts.Medium,
    textAlign: 'center',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  wrapperButton: {
    fontSize: 18,
    fontFamily: fonts.Medium,
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});
