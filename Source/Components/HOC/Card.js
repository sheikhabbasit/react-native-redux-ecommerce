import {View, StyleSheet} from 'react-native';
import React from 'react';

const Card = ({children, theme, color}) => {
  return (
    <View
      style={[
        styles.card,
        theme ? styles.darkCard : null,
        color ? {backgroundColor: color} : null,
      ]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9C0F48',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FFCBCB',
  },
  darkCard: {
    backgroundColor: '#2A7F40',
    borderColor: '#062C30',
  },
});
