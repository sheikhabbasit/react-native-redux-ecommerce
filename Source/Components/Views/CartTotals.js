import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const CartTotals = ({label, amount}) => {
  const darkMode = useTheme();
  return (
    <View style={styles.cartTotalsContainer}>
      <Text style={[styles.boldText, darkMode ? styles.darkText : null]}>
        {label}{' '}
      </Text>
      <Text style={[styles.generalText, darkMode ? styles.darkText : null]}>
        {amount}
      </Text>
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
  darkText: {
    color: 'white',
  },
  cartTotalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
