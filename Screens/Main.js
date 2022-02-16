/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';

const Main = props => {
  const navigateToHome = () => {
    props.navigation.navigate('Home', {data: 'hi', name: 'james'});
  };
  const navigateToProfile = () => {
    props.navigation.navigate('Profile');
  };
  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <View style={styles.box} />
        <View style={styles.box} />
        <Button onPress={navigateToHome} title="Go to Home" />
        <Button onPress={navigateToProfile} title="Go to Profile" />
        <Button onPress={navigateToLogin} title="Go to Login" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  parent: {
    // backgroundColor: 'blue',
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  box: {
    backgroundColor: 'red',
    height: 100,
    marginBottom: 20,
  },
  box2: {
    backgroundColor: 'red',
    height: 100,
    marginBottom: 20,
    marginEnd: 20,
    width: 200,
  },
});
