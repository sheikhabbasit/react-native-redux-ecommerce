import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useDispatch, useSelector} from 'react-redux';
import {CartActions} from '../../Redux/Actions/CartActions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartItem = ({product, idWithQuantity}) => {
  const dispatch = useDispatch();
  const {imageSource, name, price, id} = product;
  const productQuantity = idWithQuantity[id];

  const incrementQuantity = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  return (
    <Card>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.quantityWrapper}>
            <View style={styles.quantityChangerWrapper}>
              <Pressable
                android_ripple={{color: 'white'}}
                style={styles.addSubButton}>
                <Text style={styles.buttonLabel}>-</Text>
              </Pressable>
              <View style={styles.amountContainer}>
                <Text style={styles.quantity}>{productQuantity}</Text>
              </View>
              <Pressable
                onPress={incrementQuantity}
                android_ripple={{color: 'white'}}
                style={styles.addSubButton}>
                <Text style={styles.buttonLabel}>+</Text>
              </Pressable>
            </View>
            <View style={styles.deleteContainer}>
              <MaterialCommunityIcons name="delete" size={20} color="#292329" />
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    height: 100,
    width: 100,
    marginEnd: 10,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#eda6c2',
    fontWeight: '700',
  },
  price: {
    fontSize: 16,
    color: '#eda6c2',
  },
  quantityWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  quantityChangerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addSubButton: {
    height: 22,
    width: 22,
    backgroundColor: '#eda6c2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
  },
  buttonLabel: {
    fontSize: 18,
    color: '#9C0F48',
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    color: '#eda6c2',
    marginEnd: 15,
  },
  deleteContainer: {
    backgroundColor: '#eda6c2',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginStart: 10,
  },
});
