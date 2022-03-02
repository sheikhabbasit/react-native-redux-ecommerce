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
        <Image style={styles.image} source={imageSource} />
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text numberOfLines={1} style={styles.productName}>
              {name}
            </Text>
            <Text style={styles.productLabel}>Price: ${price}</Text>
          </View>
          <Text style={styles.discount}>
            <Text style={styles.discountLabel}>{discount}</Text> off
          </Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  details: {
    width: '70%',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  discount: {
    textAlign: 'center',
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#eda6c2',
  },
  discountLabel: {
    fontWeight: 'bold',
    color: '#08a626',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 180,
    margin: 0,
    marginBottom: 10,
    borderRadius: 10,
    opacity: 0.7,
  },
  productName: {
    fontSize: 18,
    color: '#eda6c2',
    fontWeight: 'bold',
  },
  productLabel: {
    fontSize: 15,
    color: '#eda6c2',
    fontWeight: 'bold',
    opacity: 0.7,
  },
});
