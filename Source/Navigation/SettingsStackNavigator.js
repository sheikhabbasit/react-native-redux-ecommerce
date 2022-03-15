import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../Screens/Settings';
import EditCredentials from '../Screens/EditCredentials';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Hooks/useTheme';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  const navigation = useNavigation();
  const darkMode = useTheme();

  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTintColor: darkMode ? 'white' : '#eda6c2',
          headerStyle: {
            backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="settings"
              size={30}
              color={darkMode ? 'white' : '#eda6c2'}
              style={{marginEnd: 10}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditCredentials"
        component={EditCredentials}
        options={{
          headerTintColor: darkMode ? 'white' : '#eda6c2',
          headerStyle: {
            backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
          },
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerLeft: props => (
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color={darkMode ? 'white' : '#eda6c2'}
              style={{marginEnd: 10}}
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
