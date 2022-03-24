import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Hooks/useTheme';
import Header from '../Components/Typography/Header';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  const headerStyles = {
    headerTintColor: darkMode ? 'white' : '#eda6c2',
    headerStyle: {
      backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
    },
    headerTitleStyle: {
      fontWeight: '700',
    },
  };

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="CartPage"
        component={Cart}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Header
              iconName="cart"
              size={30}
              theme={darkMode ? 'white' : '#eda6c2'}
              onPress={undefined}
              name={'Cart'}
              variant="Bold"
            />
          ),
          title: '',
        }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={{
          ...headerStyles,
          headerLeft: props => (
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color={darkMode ? 'white' : '#eda6c2'}
              style={{marginEnd: 10}}
              onPress={() => navigation.navigate('CartPage')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
