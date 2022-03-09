import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {StyleSheet, Image, Pressable, View, SafeAreaView} from 'react-native';
import SettingItem from '../Components/Views/SettingItem';
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';
import {useSelector} from 'react-redux';
import ProfileCredentials from '../Components/Views/ProfileCredentials';
import Button from '../Components/HOC/Button';

const Settings = props => {
  const [imagePath, setImagePath] = useState('');
  const {email, password} = useSelector(state => state.app.userInfo);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({type: AppActions.LOGOUT});
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
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

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.card}>
        <Image
          style={{
            height: 200,
            width: 200,
            borderRadius: 200,
            alignSelf: 'center',
          }}
          source={
            imagePath
              ? {uri: imagePath}
              : require('../Resources/Images/product1.jpg')
          }
        />
        <Button label="Capture" onPress={takeCameraPhoto} />
        <Button label="Choose From Library" onPress={chooseFromLibrary} />
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

// let imageURL = require('../Resources/Images/product1.jpg');

{
  /*
   */
}
