import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useNavigation} from '@react-navigation/native';
import Button from '../HOC/Button';

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
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.productLabel}>Price: {price}</Text>
            </View>
            <Text style={styles.discount}>
              At a mega discount of{' '}
              <Text style={styles.discountLabel}>{discount}</Text>
            </Text>
          </View>
        </View>
        <Button onPress={navigateTo} label="Details" />
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
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  discountLabel: {
    fontWeight: 'bold',
    color: '#08a626',
    fontSize: 20,
  },
  image: {
    width: '48%',
    height: 170,
    borderRadius: 10,
    opacity: 0.7,
  },
  productName: {
    fontSize: 18,
    color: '#9C0F48',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  productLabel: {
    fontSize: 15,
    color: '#9C0F48',
    fontWeight: 'bold',
    opacity: 0.7,
    textAlign: 'center',
  },
});
