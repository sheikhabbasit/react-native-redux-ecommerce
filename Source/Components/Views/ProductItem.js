import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useNavigation} from '@react-navigation/native';

const ProductItem = props => {
  const {imageSource, name, price} = props.product;
  const {product} = props;
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('Product Details', {product});
  };

  return (
    <Card>
      <Pressable onPress={navigateTo}>
        <View style={styles.container}>
          <Image style={styles.image} source={imageSource} />
          <View style={styles.detailsContainer}>
            <Text style={styles.productLabel}>{name}</Text>
            <Text style={styles.productLabel}>{price}</Text>
          </View>
        </View>
        <Pressable
          onPress={navigateTo}
          style={styles.cartButton}
          android_ripple={{color: 'white'}}>
          <Text style={styles.buttonLabel}>Details</Text>
        </Pressable>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: 10,
  },
  productLabel: {
    fontSize: 15,
    color: '#FFBBBB',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cartButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBBBB',
    elevation: 10,
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: '#9C0F48',
  },
});
