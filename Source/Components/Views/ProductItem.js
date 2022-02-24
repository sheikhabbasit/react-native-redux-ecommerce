import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useNavigation} from '@react-navigation/native';

const ProductItem = props => {
  const {imageSource, name, price, discount} = props.product;
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
            <View style={styles.details}>
              <Text style={styles.productLabel}>{name}</Text>
              <Text style={styles.productLabel}>Price: {price}</Text>
            </View>
            <Text style={styles.discount}>
              At a mega discount of{' '}
              <Text style={styles.discountLabel}>{discount}</Text>
            </Text>
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
  buttonLabel: {
    fontWeight: 'bold',
    color: '#9C0F48',
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
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
    backgroundColor: '#e88eb2',
    borderRadius: 10,
    width: '48%',
  },
  details: {
    padding: 10,
  },
  discount: {
    textAlign: 'center',
  },
  discountLabel: {
    fontWeight: 'bold',
    color: '#08a626',
    fontSize: 20,
  },
  image: {
    width: '48%',
    height: 150,
    borderRadius: 10,
  },
  productLabel: {
    fontSize: 15,
    color: '#9C0F48',
    fontWeight: 'bold',
  },
});
