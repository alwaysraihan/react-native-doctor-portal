import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors, DoctorImg, fonts} from '../../res';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BoxItemTopProduct, Header} from '../../components/molecules';
import WhiteSpace from '../../components/atoms/WhiteSpace';

const Categories = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    fetch(url).then(res => {
      res
        .json()
        .then(data => setUsers(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    });
  }, []);
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
                  onPress={() => navigation.navigate('Booking', doctor)}
                />
              );
            })}
          </View>
          <View>
            {loading ? (
              <Text>Loadign ....</Text>
            ) : (
              <View>
                {users.map((user, index) => (
                  <View
                    key={index}
                    style={{
                      marginVertical: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        padding: 15,
                        backgroundColor: colors.primary,
                        borderRadius: 10,
                        shadowColor: colors.primary,
                        shadowOffset: {
                          width: 0,
                          height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 10.32,

                        elevation: 16,
                      }}>
                      <Text>Id:{user.id}</Text>
                      <Text>Name:{user.name}</Text>
                      <Text>Email:{user.email}</Text>
                      <Text>Address:{user.address?.street}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
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
