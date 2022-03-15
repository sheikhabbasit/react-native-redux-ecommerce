import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ProductDetails from '../Screens/ProductDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Hooks/useTheme';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  return (
    <Stack.Navigator initialRouteName="FoodKhana">
      <Stack.Screen
        name="FoodKhana"
        component={Home}
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
              name="fast-food"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
          headerRight: () => {},
        }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={{
          headerTintColor: '#eda6c2',
          headerStyle: {
            backgroundColor: '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
