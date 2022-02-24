import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9C0F48',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
