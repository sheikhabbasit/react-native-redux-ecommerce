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

const Stack = createNativeStackNavigator();

const ExperimentalStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  return (
    <Stack.Navigator initialRouteName="Image Home">
      <Stack.Screen
        name="Image Home"
        component={ImageHome}
        options={{
          headerTintColor: darkMode ? 'white' : '#eda6c2',
          headerStyle: {
            backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-images"
              size={30}
              color={darkMode ? 'white' : '#eda6c2'}
              style={{marginEnd: 10}}
              onPress={() => navigation.navigate('Image Genre')}
            />
          ),
          title: 'Images',
        }}
      />
      <Stack.Screen
        name="Image Genre"
        component={ImageGenre}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-images"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Image With Breed"
        component={ImageWithBreed}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-images"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="map"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Image With Pagination"
        component={Pagination}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-images"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Location Select"
        component={LocationSelect}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-map"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="md-map"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ExperimentalStackNavigator;
