import {SafeAreaView, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const ProductDetails = props => {
  console.log(props.route.params);
  const {imageSource, name, price} = props.route.params.product;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={imageSource} />
        <Text style={styles.label}>
          Product Name: <Text style={styles.productSpecifics}>{name}</Text>
        </Text>
        <Text style={styles.label}>
          Cost: <Text style={styles.productSpecifics}>{price}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCBCB',
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  label: {
    color: '#9C0F48',
    marginTop: 15,
    fontSize: 20,
  },
  productSpecifics: {
    fontWeight: 'bold',
  },
});
