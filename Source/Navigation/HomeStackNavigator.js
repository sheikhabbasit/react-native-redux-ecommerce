import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ProductDetails from '../Screens/ProductDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FoodKhana">
      <Stack.Screen
        name="FoodKhana"
        component={Home}
        options={{
          headerLeft: props => (
            <Ionicons
              name="fast-food"
              size={30}
              color="#9C0F48"
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
