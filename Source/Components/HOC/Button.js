import {Pressable, Text, View, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({onPress, label}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={styles.cartButton}
        android_ripple={{color: 'white', borderless: true}}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    elevation: 25,
  },
  cartButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBBBB',
    height: 40,
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: '#9C0F48',
  },
});
