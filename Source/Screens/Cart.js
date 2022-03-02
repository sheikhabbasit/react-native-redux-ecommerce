import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import CartItem from '../Components/Views/CartItem';
import {useSelector} from 'react-redux';
import Card from '../Components/HOC/Card';
import CartTotals from '../Components/Views/CartTotals';

const Cart = props => {
  const {cartItems, idWithQuantity} = useSelector(state => state.cart);
  const [listNotEmpty, setListNotEmpty] = useState(cartItems ? true : false);

  useEffect(() => {
    if (cartItems?.length === 0) {
      console.log('cart emptied');
      return setListNotEmpty(false);
    }
    if (cartItems?.length > 0) {
      return setListNotEmpty(true);
    }
  }, [cartItems]);

  const cartTotalValue =
    cartItems?.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * idWithQuantity[currentValue.id],
      0,
    ) ?? 0;
  const shipping = cartTotalValue > 100 || cartTotalValue < 1 ? 0 : 10;
  const tax = cartTotalValue * 0.18;
  const amountPayable = cartTotalValue + shipping + tax;

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.list}
        data={cartItems}
        renderItem={({item}) => (
          <CartItem product={item} idWithQuantity={idWithQuantity} />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Image
            source={require('../Resources/Images/emptycart.jpg')}
            style={styles.emptyCart}
          />
        }
        ListFooterComponent={
          listNotEmpty && (
            <Fragment>
              <Card>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter delivery location"
                />
                <Text style={styles.generalText}>
                  <Text style={styles.boldText}>Destination: </Text>Dummy
                  Selected Location
                </Text>
              </Card>
              <Card>
                <CartTotals label="Cart Total:" amount={cartTotalValue} />
                <CartTotals label="Shipping:" amount={shipping} />
                <CartTotals label="Tax:" amount={tax} />
                <CartTotals label="Amount Payable:" amount={amountPayable} />
              </Card>
              <Pressable style={styles.checkoutButton}>
                <Text style={styles.checkoutLabel}>Checkout</Text>
              </Pressable>
            </Fragment>
          )
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFCBCB',
    flex: 1,
  },
  list: {
    borderRadius: 10,
    padding: 20,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  checkoutParent: {
    backgroundColor: '#9C0F48',
    padding: 20,
    height: '50%',
    marginTop: 10,
  },
  checkoutContainer: {
    flexDirection: 'row',
    backgroundColor: '#9C0F48',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  emptyCart: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#ffcbcb',
  },
  generalText: {
    color: '#FFCBCB',
  },
  checkoutButton: {
    backgroundColor: '#9C0F48',
    padding: 10,
    borderRadius: 10,
  },
  checkoutLabel: {
    color: '#FFCBCB',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cart;
