import {Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';

const CartForm = ({placeholder, boldTextLabel, textLabel}) => {
  return (
    <Card>
      <TextInput style={styles.textInput} placeholder={placeholder} />
      <Text style={styles.generalText}>
        <Text style={styles.boldText}>{boldTextLabel}</Text>
        {textLabel}
      </Text>
    </Card>
  );
};

export default CartForm;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
  },
  generalText: {
    color: '#FFCBCB',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#ffcbcb',
  },
});
