import {Text, StyleSheet, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Card from '../Components/HOC/Card';
import Button from '../Components/HOC/Button';
import {useDispatch} from 'react-redux';
import {CartActions} from '../Redux/Actions/CartActions';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Hooks/useTheme';
import ProductInfoText from '../Components/Views/ProductInfoText';
import FlexedScrollView from '../Components/HOC/FlexedScrollView';
import {Appbar} from 'react-native-paper';

const ProductDetails = props => {
  const {product} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const darkMode = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      header: () => (
        <Appbar.Header
          style={[styles.header, darkMode ? styles.darkHeader : null]}>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content
            style={{marginLeft: -10}}
            title={product.name}
            subtitle="Product"
          />
        </Appbar.Header>
      ),
    });
  });

  const addToCart = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  return (
    <FlexedScrollView theme={darkMode}>
      <Card theme={darkMode}>
        <Image style={styles.image} source={product.imageSource} />
        <ProductInfoText text={product.name} />
        <ProductInfoText text={product.price} />
        <Button onPress={addToCart} label="Add to Cart" />
      </Card>
      <Card theme={darkMode}>
        <Text style={[styles.label, styles.description]}>Description:</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </Card>
    </FlexedScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    opacity: 0.8,
  },
  description: {
    marginTop: 0,
    fontWeight: 'bold',
  },

  productDescription: {
    fontSize: 15,
    color: 'white',
  },
  header: {
    backgroundColor: '#fff',
  },
  darkHeader: {
    backgroundColor: 'black',
  },
});
