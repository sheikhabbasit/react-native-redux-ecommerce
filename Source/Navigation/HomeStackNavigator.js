import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ProductDetails from '../Screens/ProductDetails';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FoodKhana">
      <Stack.Screen name="FoodKhana" component={Home} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
