import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ImageHome from '../Screens/ImageHome';
import ImageGenre from '../Screens/ImageGenre';
import ImageWithBreed from '../Screens/ImageWithBreed';

const Stack = createNativeStackNavigator();

const ExperimentalStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Image Home">
      <Stack.Screen
        name="Image Home"
        component={ImageHome}
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
    </Stack.Navigator>
  );
};

export default ExperimentalStackNavigator;
