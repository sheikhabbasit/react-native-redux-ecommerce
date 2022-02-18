import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ErrorMessage = ({inputKey, touched, errors}) => {
  return <Text style={styles.label}>{errors[inputKey]}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  label: {
    color: 'red',
    fontSize: 15,
    marginHorizontal: 20,
  },
});
