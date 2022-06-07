import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors, DoctorImg, fonts} from '../../res';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BoxItemTopProduct, Header} from '../../components/molecules';
import WhiteSpace from '../../components/atoms/WhiteSpace';

const Categories = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const categoriesData = [
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
        <Header back cart onPress={() => navigation.goBack()} />
        <View style={styles.wrapperTitle}>
          <Text style={styles.categoryTitle}>{route.params}</Text>
        </View>
        <WhiteSpace height={10} />
        {/* Content  */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBox}>
            {categoriesData.map((doctor, index) => {
              return (
                <BoxItemTopProduct
                  key={index}
                  bgColor={doctor.bgColor}
                  icon={doctor.icon}
                  name={doctor.name}
                  price={doctor.price}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapperTitle: {
    paddingHorizontal: 20,
  },

  categoryTitle: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  sectionBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
