import {Text, Pressable, View, StyleSheet} from 'react-native';
import React from 'react';

const CartActionButton = ({onPress, label, extraMargin = false}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'white', borderless: false}}
        style={[styles.cartButton, extraMargin && styles.extraMargin]}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CartActionButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    borderRadius: 10,
    // elevation: 20,
    overflow: 'hidden',
    borderRadius: 5,
  },
  cartButton: {
    height: 30,
    width: 25,
    backgroundColor: '#eda6c2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
