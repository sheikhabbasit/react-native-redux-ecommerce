import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CartTotals = ({label, amount}) => {
  return (
    <View style={styles.cartTotalsContainer}>
      <Text style={styles.boldText}>{label} </Text>
      <Text style={styles.generalText}>{amount}</Text>
    </View>
  );
};

export default CartTotals;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    color: '#ffcbcb',
  },
  generalText: {
    color: '#FFCBCB',
  },
  cartTotalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
