import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ErrorAuthShow = ({label}) => {
  return (
    <View style={styles.error}>
      <Text style={styles.whiteLabel}>{label}</Text>
    </View>
  );
};

export default ErrorAuthShow;

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  whiteLabel: {
    color: 'white',
  },
});
