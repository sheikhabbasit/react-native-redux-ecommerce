import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HyperLink = ({label = '', path = ''}) => {
  const {navigate, reset, goBack} = useNavigation();
  const handleNavigation = () => {
    if (!Boolean(path)) return;
    navigate(path);
  };
  return (
    <Pressable style={styles.wrapper} onPress={handleNavigation}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default HyperLink;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FF5C5D',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
});
