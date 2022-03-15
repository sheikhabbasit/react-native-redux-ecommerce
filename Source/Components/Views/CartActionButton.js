import React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import {useTheme} from '../../Hooks/useTheme';

const CartActionButton = ({onPress, label, extraMargin = false}) => {
  const darkMode = useTheme();
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'white', borderless: false}}
        style={[
          styles.cartButton,
          darkMode ? styles.darkBackground : null,
          extraMargin && styles.extraMargin,
        ]}>
        <Text style={[styles.buttonLabel, darkMode ? styles.darkText : null]}>
          {label}
        </Text>
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
  darkBackground: {
    backgroundColor: '#062C30',
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
  darkText: {
    color: '#fff',
  },
});
