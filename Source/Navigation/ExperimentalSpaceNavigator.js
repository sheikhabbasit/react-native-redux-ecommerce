import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ImageHome from '../Screens/ImageHome';
import ImageGenre from '../Screens/ImageGenre';
import ImageWithBreed from '../Screens/ImageWithBreed';
import Countries from '../Screens/Countries';
import Pagination from '../Screens/Pagination';
import {useTheme} from '../Hooks/useTheme';
import Map from '../Screens/Map';
import LocationSelect from '../Screens/LocationSelect';
import {headerReturn} from '../HelperFunctions/HeaderReturn';
import Animations from '../Screens/Animations';

const Stack = createNativeStackNavigator();

const ExperimentalStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  return (
    <Stack.Navigator initialRouteName="Image Home">
      <Stack.Screen
        name="Image Home"
        component={ImageHome}
        options={() =>
          headerReturn(
            'md-images',
            () => navigation.navigate('Image Genre'),
            'Images',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Image Genre"
        component={ImageGenre}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Images by Genre',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Image With Breed"
        component={ImageWithBreed}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Images of Dog Breed',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Countries',

            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Image With Pagination"
        component={Pagination}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Images by Pagination',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Location Select"
        component={LocationSelect}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Location Select',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.goBack(),
            'Map',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Animations"
        component={Animations}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.goBack(),
            'Animations',
            darkMode,
          )
        }
      />
    </Stack.Navigator>
  );
};

export default ExperimentalStackNavigator;
