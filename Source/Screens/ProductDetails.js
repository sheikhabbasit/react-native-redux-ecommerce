import {Text, StyleSheet, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useLayoutEffect} from 'react';
import Card from '../Components/HOC/Card';
import Button from '../Components/HOC/Button';
import {useDispatch} from 'react-redux';
import {CartActions} from '../Redux/Actions/CartActions';
import {useNavigation} from '@react-navigation/native';

const ProductDetails = props => {
  const {imageSource, name, price, description} = props.route.params.product;
  const {product} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({title: name});
  });

  const addToCart = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  // const addToCart = () => {
  //   dispatch({type: CartActions.REMOVE});
  // };

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView style={styles.container}>
        <Card>
          <Image style={styles.image} source={imageSource} />
          <Text style={styles.label}>
            Product Name:{'\n'}
            <Text style={styles.productSpecifics}>{name}</Text>
          </Text>
          <Text style={styles.label}>
            Cost:{'\n'}
            <Text style={styles.productSpecifics}>{price}</Text>
          </Text>
          <Button onPress={addToCart} label="Add to Cart" />
        </Card>
        <Card style={styles.cardSpecific}>
          <Text style={[styles.label, styles.description]}>Description:</Text>
          <Text style={styles.productDescription}>{description}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#9C0F48',
    paddingBottom: 16,
  },
  container: {
    backgroundColor: '#9C0F48',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    opacity: 0.8,
  },
  label: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
  },
  description: {
    marginTop: 0,
    fontWeight: 'bold',
  },
  productSpecifics: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  productDescription: {
    fontSize: 15,
    color: 'white',
  },
});
