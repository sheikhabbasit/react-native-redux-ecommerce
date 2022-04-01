import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';
import {CartActions} from '../Redux/Actions/CartActions';
import {ThemeActions} from '../Redux/Actions/ThemeActions';
import {signOut} from 'firebase/auth';
import {auth} from '../../Firebase/firebase-config';
import SettingItem from '../Components/Views/SettingItem';
import ProfileCredentials from '../Components/Views/ProfileCredentials';
import Button from '../Components/HOC/Button';
import Card from '../Components/HOC/Card';
import {useTheme} from '../Hooks/useTheme';
import Easing from 'react-native/Libraries/Animated/Easing';

const {width, height} = Dimensions.get('window');

export const Settings = props => {
  const darkMode = useTheme();
  const dispatch = useDispatch();
  const [showPictureMenu, setShowPictureMenu] = useState(false);
  const [imagePath, setImagePath] = useState(
    'https://www.clipartmax.com/png/middle/318-3182943_admin-blank-user-profile.png',
  );
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [transitTo, setTransitTo] = useState(new Animated.Value(height));

  const {email, password} = useSelector(state => state.app.userInfo);

  const handleLogout = () => {
    signOut(auth)
      .then(res => {
        dispatch({type: AppActions.LOGOUT});
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
        dispatch({type: CartActions.EMPTY_CART});
      })
      .catch(err => console.log('fail', err));
  };

  const takeCameraPhoto = () => {
    setShowPictureMenu(false);
    setOpacity(new Animated.Value(0));
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
    });
  };

  const chooseFromLibrary = () => {
    setShowPictureMenu(false);
    setOpacity(new Animated.Value(0));
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
    if (!showPictureMenu) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
      Animated.timing(transitTo, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setShowPictureMenu(prevState => !prevState);
    }
    if (showPictureMenu) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(transitTo, {
        toValue: height,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        setShowPictureMenu(prevState => !prevState);
      }, 500);
    }
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={[styles.wrapper, darkMode ? styles.darkWrapper : null]}>
      {/* Profile Picture */}

      <View style={styles.card}>
        <Pressable onPress={showDpMenu}>
          <Avatar.Image
            size={200}
            source={{uri: imagePath}}
            style={{alignSelf: 'center', marginVertical: 10}}
          />
        </Pressable>
      </View>

      {/* Credentials */}

      <View style={styles.card}>
        <Pressable
          style={[styles.credentialsDisplay, darkMode ? styles.darkCard : null]}
          android_ripple={{color: 'white'}}>
          <ProfileCredentials label="Email ID:" attribute={email} />
          <ProfileCredentials label="Password:" attribute={password} />
        </Pressable>
      </View>

      {/* Settings */}

      <SettingItem onPress={handleEditing} label="Edit Credentials" />
      <SettingItem onPress={toggleDarkMode} label="Toggle Dark Mode" />
      <SettingItem onPress={handleLogout} label="Logout" />

      {/* Profile Picture Menu */}

      {showPictureMenu && (
        <Animated.View
          style={[
            styles.bottomMenu,
            {
              opacity: opacity,
              transform: [{translateY: transitTo}],
            },
          ]}>
          <Card color="#2A7F40" theme={darkMode}>
            <Button color="black" label="Capture" onPress={takeCameraPhoto} />
            <Button
              color="black"
              label="Choose From Library"
              onPress={chooseFromLibrary}
            />
          </Card>
        </Animated.View>
      )}
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
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  opacityBackdrop: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
