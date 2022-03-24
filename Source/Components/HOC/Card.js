import {View, StyleSheet} from 'react-native';
import React from 'react';

const Card = ({children, theme}) => {
  return (
    <View style={[styles.card, theme ? styles.darkCard : null]}>
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
    marginBottom: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FFCBCB',
  },
  darkCard: {
    backgroundColor: '#05595B',
    borderColor: '#062C30',
  },
});
