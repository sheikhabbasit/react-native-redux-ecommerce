import {StyleSheet, Text, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {SessionManager} from '../Source/Models/Sessions/SessionManager';

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
      <Pressable style={styles.button} onPress={handleEditing}>
        <Text style={styles.textLabel}>Edit Credentials</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.textLabel}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FDEFF4',
  },
  button: {
    backgroundColor: '#FF5C8D',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
