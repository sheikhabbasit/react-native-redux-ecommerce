import {Text, StyleSheet} from 'react-native';
import React from 'react';

const ProductInfoText = ({text}) => {
  return (
    <Text style={styles.label}>
      Product Name:{'\n'}
      <Text style={styles.productSpecifics}>{text}</Text>
    </Text>
  );
};

export default ProductInfoText;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Ubuntu-Regular',
    color: 'white',
    marginTop: 5,
    fontSize: 15,
  },
  productSpecifics: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: 'white',
  },
});
