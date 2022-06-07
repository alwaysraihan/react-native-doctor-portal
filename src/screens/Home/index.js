import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {BoxItemTopProduct, Header} from '../../components/molecules';
import {
  IC_Search,
  IC_Fruits,
  IC_Vegetables,
  IC_Drinks,
  IC_Bakery,
  IC_Bakery2,
} from '../../res/images/Icons';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import BoxItemCategories from '../../components/molecules/BoxItemCategories';
import WhiteSpace from '../../components/atoms/WhiteSpace';
import {DoctorImg} from '../../res';

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
      name: 'Harunur Rashid',
      icon: DoctorImg,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Babul Mallik',
      icon: DoctorImg,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },

    {
      name: 'Babul Mallik',
      icon: DoctorImg,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 500,
      description: 'Hello this is a demo description. I hope you understand.',
    },
    {
      name: 'Mahibur Rahman',
      icon: DoctorImg,
      bgColor: 'rgba(140, 250, 145,0.5)',
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
          {/* Catagories  */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BoxItemCategories
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Teeth"
                onPress={() => navigation.navigate('Categories', 'Teeth')}
              />
              <BoxItemCategories
                icon={<IC_Vegetables />}
                color="rgba(233, 255, 210, 0.5)"
                text="Cavity"
                onPress={() => navigation.navigate('Categories', 'Cavity')}
              />
              <BoxItemCategories
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Surgery"
                onPress={() => navigation.navigate('Categories', 'Surgery')}
              />
              <BoxItemCategories
                icon={<IC_Bakery />}
                color="rgba(214, 255, 218, 0.5)"
                text="Pediatric"
                onPress={() => navigation.navigate('Categories', 'Pediatric')}
              />
              <BoxItemCategories
                icon={<IC_Bakery2 />}
                color="rgba(255, 250, 204, 0.5)"
                text="Orthopaedics"
                onPress={() =>
                  navigation.navigate('Categories', 'Orthopaedics')
                }
              />
            </ScrollView>
          </View>
          <WhiteSpace height={24} />
          {/* Top Products  */}
          <View>
            <View style={styles.wrappHearTopProducts}>
              <Text style={styles.titleTopProducts}>Best Doctors</Text>

              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            {/* boxProductSection  */}
            <View style={styles.sectionBoxTopProduct}>
              {dataTopDoctors.map((doctor, index) => {
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
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  wrappHearTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleTopProducts: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  seeAllText: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
