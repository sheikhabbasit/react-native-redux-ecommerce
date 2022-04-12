import {Pressable, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const Button = ({
  onPress,
  label,
  color,
  marginHorizontal = null,
  marginTop = null,
}) => {
  const darkMode = useTheme();
  return (
    <View style={[styles.buttonContainer, {marginHorizontal, marginTop}]}>
      <Pressable
        onPress={onPress}
        style={[
          styles.cartButton,
          darkMode ? styles.darkButton : null,
          {backgroundColor: color},
        ]}
        android_ripple={{color: 'white', borderless: true}}>
        <Text style={[styles.buttonLabel]}>{label}</Text>
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
    color: 'white',
  },
  darkLabel: {
    color: '#fff',
  },
});
