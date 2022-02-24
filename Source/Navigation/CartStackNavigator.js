import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart Tanker"
        component={Cart}
        options={{
          headerLeft: props => (
            <Ionicons
              name="cart"
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

export default CartStackNavigator;
