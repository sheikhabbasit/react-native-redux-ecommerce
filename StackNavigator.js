// import { View, Text } from 'react-native'
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Main from './Screens/Main';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator, ProfileStackNavigator};
