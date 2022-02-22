import {StyleSheet, Text, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {SessionManager} from '../Models/Sessions/SessionManager';
import SettingItem from '../Components/Views/SettingItem';

const Settings = props => {
  const handleLogout = () => {
    SessionManager.clear();
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
