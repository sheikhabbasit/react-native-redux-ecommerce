import {StyleSheet, Text, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {SessionManager} from '../Models/Sessions/SessionManager';
import SettingItem from '../Components/Views/SettingItem';
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';

const Settings = props => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({type: AppActions.LOGOUT});
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const handleEditing = () => {
    props.navigation.navigate('EditCredentials');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <SettingItem onPress={handleEditing} label="Edit Credentials" />
      <SettingItem onPress={handleLogout} label="Logout" />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FDEFF4',
  },
});
