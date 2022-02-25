import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const SettingItem = props => {
  const {onPress, label} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textLabel}>{label}</Text>
    </Pressable>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9C0F48',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 5,
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
