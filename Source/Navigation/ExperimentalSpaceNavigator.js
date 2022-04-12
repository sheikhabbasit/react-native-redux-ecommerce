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
import OtherRoutes from '../Screens/OtherRoutes';
import Stepper from '../Screens/Stepper';
import TextAnimator from '../Screens/TextAnimator';

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
            () => navigation.navigate('Image Home'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
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
            () => navigation.navigate('Other Routes'),
            'Animations',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Other Routes"
        component={OtherRoutes}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Image Home'),
            'Routes',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Stepper"
        component={Stepper}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Other Routes'),
            'Stepper',
            darkMode,
          )
        }
      />
      <Stack.Screen
        name="Text Animator"
        component={TextAnimator}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('Other Routes'),
            'Text Animate',
            darkMode,
          )
        }
      />
    </Stack.Navigator>
  );
};

export default ExperimentalStackNavigator;
