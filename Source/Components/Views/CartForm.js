import {Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useTheme} from '../../Hooks/useTheme';

const CartForm = ({placeholder, boldTextLabel, textLabel}) => {
  const darkMode = useTheme();
  return (
    <Card>
      <TextInput style={styles.textInput} placeholder={placeholder} />
      <Text style={[styles.generalText, darkMode ? styles.darkText : null]}>
        <Text style={[styles.boldText, darkMode ? styles.darkText : null]}>
          {boldTextLabel}
        </Text>
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
  darkText: {
    color: 'white',
  },
});
