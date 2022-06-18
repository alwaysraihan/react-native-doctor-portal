import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {colors, fonts} from '../../res';

const Booking = ({route, navigation}) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDakMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDakMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* header  */}
        <Header onPress={() => navigation.goBack()} />
        {/* Image  */}
        <View style={styles.wrapperImage}>
          <Image source={dataParams.icon} style={styles.image} />
        </View>
        {/* content  */}
        <View style={styles.content}>
          {/* top content  */}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
            </View>
            <View style={styles.description}>
              <Text>{dataParams.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  description: {
    marginTop: 20,
    color: colors.grey,
  },
});
