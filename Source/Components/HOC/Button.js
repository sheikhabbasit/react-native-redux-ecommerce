import {Pressable, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const Button = ({onPress, label}) => {
  const darkMode = useTheme();
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={[styles.cartButton, darkMode ? styles.darkButton : null]}
        android_ripple={{color: 'white', borderless: true}}>
        <Text style={[styles.buttonLabel, darkMode ? styles.darkLabel : null]}>
          {label}
        </Text>
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
  darkButton: {
    backgroundColor: '#062C30',
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: '#9C0F48',
  },
  darkLabel: {
    color: '#fff',
  },
});
