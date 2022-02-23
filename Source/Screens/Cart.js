import {Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Cart = props => {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView contentContainerStyle={styles.card}></ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FFCBCB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
