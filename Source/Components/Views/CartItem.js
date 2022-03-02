import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useDispatch} from 'react-redux';
import {CartActions} from '../../Redux/Actions/CartActions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartActionButton from './CartActionButton';

const CartItem = ({product, idWithQuantity}) => {
  const dispatch = useDispatch();
  const {imageSource, name, price, id} = product;
  const productQuantity = idWithQuantity[id];

  const incrementQuantity = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  const reduceQuantity = () => {
    dispatch({type: CartActions.REDUCE, data: {product}});
  };

  const deleteFromCart = () => {
    dispatch({type: CartActions.REMOVE, data: {product}});
  };

  return (
    <Card>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {name}
            </Text>
            <Text style={styles.price}>
              Subtotal: {price * productQuantity}
            </Text>
          </View>
          <View style={styles.quantityWrapper}>
            <View style={styles.quantityChangerWrapper}>
              <CartActionButton label="-" onPress={reduceQuantity} />
              <View style={styles.amountContainer}>
                <Text style={styles.quantity}>{productQuantity}</Text>
              </View>
              <CartActionButton label="+" onPress={incrementQuantity} />
            </View>
            <CartActionButton
              extraMargin={true}
              label={
                <MaterialCommunityIcons
                  name="delete"
                  size={25}
                  color="#9C0F48"
                />
              }
              onPress={deleteFromCart}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};
//
export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
  },
  title: {
    fontSize: 16,
    color: '#eda6c2',
    fontWeight: '700',
  },
  price: {
    fontSize: 14,
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
    flexWrap: 'wrap',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
