import {Text, View, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const SettingItem = props => {
  const {onPress, label} = props;
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{color: 'white'}}
        style={styles.button}
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
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
