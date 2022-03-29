import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const SocialAuth = () => {
  return (
    <Button
      icon="apple"
      mode="contained"
      style={styles.socialAuth}
      onPress={() => console.log('Pressed')}>
      Sign in with Apple
    </Button>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
  socialAuth: {
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
});
