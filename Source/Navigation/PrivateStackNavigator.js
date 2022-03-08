import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartStackNavigator from './CartStackNavigator';
import {useSelector} from 'react-redux';
import ExperimentalStackNavigator from './ExperimentalSpaceNavigator';

const Tab = createBottomTabNavigator();

const PrivateStackNavigator = () => {
  const {totalQuantity} = useSelector(state => state.cart);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'ios-home-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'ios-settings-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'ios-cart-outline';
          } else if (route.name === 'Images') {
            iconName = focused ? 'md-images' : 'images-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#eda6c2',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#470D21',
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{tabBarBadge: totalQuantity === 0 ? null : totalQuantity}}
      />
      <Tab.Screen name="Images" component={ExperimentalStackNavigator} />
      <Tab.Screen name="Setting" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default PrivateStackNavigator;
