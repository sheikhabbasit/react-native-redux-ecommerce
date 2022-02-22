import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../Screens/Settings';
import EditCredentials from '../Screens/EditCredentials';
const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="EditCredentials" component={EditCredentials} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
