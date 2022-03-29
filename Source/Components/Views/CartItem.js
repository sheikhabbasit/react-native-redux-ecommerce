import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useDispatch} from 'react-redux';
import {CartActions} from '../../Redux/Actions/CartActions';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../Hooks/useTheme';
import {Appbar} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const CartItem = ({product, idWithQuantity}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {imageSource, name, price, id} = product;
  const productQuantity = idWithQuantity[id];
  const darkMode = useTheme();

  const incrementQuantity = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  const reduceQuantity = () => {
    dispatch({type: CartActions.REDUCE, data: {product}});
  };

  const deleteFromCart = () => {
    dispatch({type: CartActions.REMOVE, data: {product}});
  };

  const navigateToProduct = () => {
    navigation.navigate('Product Details', {product});
  };

  return (
    <Card theme={darkMode}>
      <Pressable onPress={navigateToProduct} style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View>
            <Text
              numberOfLines={1}
              style={[styles.title, darkMode ? styles.darkText : null]}>
              {name}
            </Text>
            <Text style={[styles.price, darkMode ? styles.darkText : null]}>
              Subtotal: {price * productQuantity}
            </Text>
          </View>

          <Appbar
            style={[styles.bottom, darkMode ? styles.darkBackground : null]}
            dark={darkMode}>
            <Appbar.Action icon="arrow-down-thick" onPress={reduceQuantity} />
            <View style={styles.amountContainer}>
              <Text
                style={[styles.quantity, darkMode ? styles.darkText : null]}>
                {productQuantity}
              </Text>
            </View>
            <Appbar.Action icon="arrow-up-thick" onPress={incrementQuantity} />
            <Appbar.Action icon="delete" onPress={deleteFromCart} />
          </Appbar>
        </View>
      </Pressable>
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
  darkBackground: {
    backgroundColor: '#062C30',
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
    color: '#000',
    marginHorizontal: 15,
    fontWeight: '700',
  },
  deleteContainer: {
    backgroundColor: '#eda6c2',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginStart: 10,
  },
  darkText: {
    color: '#fff',
  },
  bottom: {
    height: height / 15,
    backgroundColor: 'white',
  },
});
