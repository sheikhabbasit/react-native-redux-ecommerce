import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import PrivateStackNavigator from './PrivateStackNavigator';
const Stack = createNativeStackNavigator();

const PublicStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="PrivateStackNavigator"
        component={PrivateStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default PublicStackNavigator;
