import React from 'react';
import Notifications from '../Screens/Notifications';
import PrivateStackNavigator from './PrivateStackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <AppDrawer.Navigator initialRouteName="Private">
      <AppDrawer.Screen name="Private" component={PrivateStackNavigator} />
      <AppDrawer.Screen name="Notifications" component={Notifications} />
      {/* <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen
        name="MyRewardsStack"
        component={MyRewardsStackNavigator}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationsStackNavigator}
      /> */}
    </AppDrawer.Navigator>
  );
};

export default DrawerNavigator;
