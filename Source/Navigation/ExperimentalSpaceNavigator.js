import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ImageHome from '../Screens/ImageHome';
import ImageGenre from '../Screens/ImageGenre';
import ImageWithBreed from '../Screens/ImageWithBreed';
import Countries from '../Screens/Countries';
import Pagination from '../Screens/Pagination';
import {useTheme} from '../Hooks/useTheme';
import Map from '../Screens/Map';
import LocationSelect from '../Screens/LocationSelect';
import Header from '../Components/Typography/Header';

const Stack = createNativeStackNavigator();

const ExperimentalStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();
  const headerStyles = {
    headerTintColor: darkMode ? 'white' : '#eda6c2',
    headerStyle: {
      backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
    },
    headerTitleStyle: {
      fontWeight: '700',
    },
    title: '',
  };

  return (
    <Stack.Navigator initialRouteName="Image Home">
      <Stack.Screen
        name="Image Home"
        component={ImageHome}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="md-images"
              size={30}
              theme={darkMode ? 'white' : '#eda6c2'}
              onPress={() => navigation.navigate('Image Genre')}
              name={'Images'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Image Genre"
        component={ImageGenre}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode}
              onPress={() => navigation.navigate('Image Home')}
              name={'Image Genre'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Image With Breed"
        component={ImageWithBreed}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode}
              onPress={() => navigation.navigate('Image Home')}
              name={'Images of Dog Breed'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode}
              onPress={() => navigation.navigate('Image Home')}
              name={'Countries'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Image With Pagination"
        component={Pagination}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode}
              onPress={() => navigation.navigate('Image Home')}
              name={'Images With Pagination'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Location Select"
        component={LocationSelect}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode}
              onPress={() => navigation.navigate('Image Home')}
              name={'Countries'}
              variant="Bold"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="arrow-back-circle-outline"
              size={30}
              theme={darkMode ? 'white' : '#eda6c2'}
              onPress={() => navigation.navigate('Image Home')}
              name={'Maps'}
              variant="Bold"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ExperimentalStackNavigator;
