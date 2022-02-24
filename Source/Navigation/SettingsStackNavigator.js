import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../Screens/Settings';
import EditCredentials from '../Screens/EditCredentials';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: props => (
          <Ionicons
            name="settings"
            size={30}
            color="#9C0F48"
            style={{marginEnd: 10}}
          />
        ),
      }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditCredentials" component={EditCredentials} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
