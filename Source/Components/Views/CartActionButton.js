import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CartActionButton = ({onPress, label, extraMargin = false}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: 'white'}}
      style={[styles.cartButton, extraMargin && styles.extraMargin]}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default CartActionButton;

const styles = StyleSheet.create({
  cartButton: {
    height: 25,
    width: 25,
    backgroundColor: '#eda6c2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
  },
  buttonLabel: {
    fontSize: 18,
    color: '#9C0F48',
    fontWeight: 'bold',
  },
  extraMargin: {
    marginHorizontal: 15,
  },
});
