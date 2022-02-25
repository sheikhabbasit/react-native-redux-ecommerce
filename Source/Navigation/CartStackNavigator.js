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
        name="CartPage"
        component={Cart}
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
              name="cart"
              size={30}
              color="#eda6c2"
              style={{marginEnd: 10}}
            />
          ),
          title: 'Cart',
        }}
      />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
