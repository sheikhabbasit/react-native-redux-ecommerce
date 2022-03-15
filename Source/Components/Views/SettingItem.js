import {Text, View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const SettingItem = props => {
  const {onPress, label} = props;
  const darkMode = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{color: 'white'}}
        style={[styles.button, darkMode ? styles.darkModeButton : null]}
        onPress={onPress}>
        <Text style={styles.textLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    borderRadius: 10,
    elevation: 20,
    overflow: 'hidden',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#9C0F48',
    padding: 15,
  },
  darkModeButton: {
    backgroundColor: '#05595B',
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
