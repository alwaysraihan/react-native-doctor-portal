import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {DoctorImg} from '../../res/images/Illustrations/inex';
import {Header} from '../../components/molecules';
import {IC_Search} from '../../res/images/Icons';
import {colors} from '../../res/colors';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopDoctors = [
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(222,205,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(222,205,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(222,205,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(222,205,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(222,205,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* Header  */}
        <Header drawer />
        <ScrollView>
          {/* Search  */}
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
              <IC_Search />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
