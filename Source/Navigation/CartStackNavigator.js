import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Hooks/useTheme';
import {headerReturn} from '../HelperFunctions/HeaderReturn';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="CartPage"
        component={Cart}
        options={() =>
          headerReturn('cart', () => navigation.goBack(), 'Cart', darkMode)
        }
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={() =>
          headerReturn(
            'arrow-back-circle-outline',
            () => navigation.navigate('CartPage'),
            '',
            darkMode,
          )
        }
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
