import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';

const Booking = ({route, navigation}) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDakMode = useColorScheme() === 'dark';
  return (
    <ScrollView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDakMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* header  */}
        <Header onPress={() => navigation.goBack()} />
      </View>
      <Text>index</Text>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
});
