import React, {Fragment, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {StyleSheet, Image, Pressable, View, SafeAreaView} from 'react-native';
import SettingItem from '../Components/Views/SettingItem';
import {AppActions} from '../Redux/Actions/AppActions';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from 'firebase/auth';
import {auth} from '../../Firebase/firebase-config';
import ProfileCredentials from '../Components/Views/ProfileCredentials';
import Button from '../Components/HOC/Button';
import {ThemeActions} from '../Redux/Actions/ThemeActions';

export const Settings = props => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();
  const [showPictureMenu, setShowPictureMenu] = useState(false);
  const [imagePath, setImagePath] = useState(
    'https://www.clipartmax.com/png/middle/318-3182943_admin-blank-user-profile.png',
  );
  const {email, password} = useSelector(state => state.app.userInfo);

  const handleLogout = () => {
    signOut(auth)
      .then(res => {
        console.log('success ', res);
        dispatch({type: AppActions.LOGOUT});
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      })
      .catch(err => console.log('fail', err));
  };

  const takeCameraPhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImagePath(image.path);
    });
  };

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
    });
  };

  const handleEditing = () => {
    props.navigation.navigate('EditCredentials');
  };

  const toggleDarkMode = () => {
    dispatch({type: ThemeActions.TOGGLE_THEME});
  };

  const showDpMenu = () => {
    setShowPictureMenu(prevState => !prevState);
  };

  return (
    <SafeAreaView
      style={[styles.wrapper, darkMode ? styles.darkWrapper : null]}>
      <View style={styles.card}>
        <Pressable onPress={showDpMenu}>
          <Image
            style={{
              height: 200,
              width: 200,
              borderRadius: 200,
              alignSelf: 'center',
              borderWidth: 2,
              borderColor: '#05595B',
            }}
            source={{uri: imagePath}}
          />
        </Pressable>
        {showPictureMenu && (
          <Fragment>
            <Button label="Capture" onPress={takeCameraPhoto} />
            <Button label="Choose From Library" onPress={chooseFromLibrary} />
          </Fragment>
        )}
      </View>
      <View style={styles.card}>
        <Pressable
          style={[styles.credentialsDisplay, darkMode ? styles.darkCard : null]}
          android_ripple={{color: 'white'}}>
          <ProfileCredentials label="Email ID:" attribute={email} />
          <ProfileCredentials label="Password:" attribute={password} />
        </Pressable>
      </View>
      <SettingItem onPress={handleEditing} label="Edit Credentials" />
      <SettingItem onPress={toggleDarkMode} label="Toggle Dark Mode" />
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
  darkWrapper: {
    backgroundColor: '#062C30',
  },
  card: {
    marginBottom: 10,
    alignSelf: 'stretch',
    overflow: 'hidden',
    marginHorizontal: 10,
    borderRadius: 15,
    elevate: 5,
  },
  darkCard: {
    backgroundColor: '#05595B',
  },
  credentialsDisplay: {
    backgroundColor: '#9C0F48',
    padding: 20,
  },
});
