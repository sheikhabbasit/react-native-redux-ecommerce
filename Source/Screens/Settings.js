import {StyleSheet, Text, Pressable, View, SafeAreaView} from 'react-native';
import React from 'react';
import SettingItem from '../Components/Views/SettingItem';
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';
import {useSelector} from 'react-redux';
import ProfileCredentials from '../Components/Views/ProfileCredentials';

const Settings = props => {
  const {email, password} = useSelector(state => state.app.userInfo);
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
      <View style={styles.card}>
        <Pressable
          style={styles.credentialsDisplay}
          android_ripple={{color: 'white'}}>
          <ProfileCredentials label="Email ID:" attribute={email} />
          <ProfileCredentials label="Password:" attribute={password} />
        </Pressable>
      </View>
      <SettingItem onPress={handleEditing} label="Edit Credentials" />
      <SettingItem onPress={handleLogout} label="Logout" />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFBBBB',
    paddingTop: 10,
  },
  card: {
    marginBottom: 10,
    alignSelf: 'stretch',
    overflow: 'hidden',
    marginHorizontal: 10,
    borderRadius: 15,
    elevate: 5,
  },
  credentialsDisplay: {
    backgroundColor: '#9C0F48',
    padding: 20,
  },
});
