import {Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({onPress, label}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.cartButton}
      android_ripple={{color: 'white'}}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonLabel: {
    fontWeight: 'bold',
    color: '#9C0F48',
  },
  cartButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBBBB',
    elevation: 10,
  },
});
