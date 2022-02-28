import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {Fragment, useLayoutEffect, useState} from 'react';
import CartItem from '../Components/Views/CartItem';
import {useSelector} from 'react-redux';
import Card from '../Components/HOC/Card';
import CartTotals from '../Components/Views/CartTotals';

const Cart = props => {
  const {cartItems, idWithQuantity} = useSelector(state => state.cart);
  const [listEmpty, setListEmpty] = useState(false);
  const cart = useSelector(state => state.cart);

  useLayoutEffect(() => {
    if (cartItems.length === 0) setListEmpty(true);
    if (cartItems.length > 0) setListEmpty(false);
  }, [cartItems]);

  const cartTotalValue =
    cart.cartItems?.reduce(
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
          <Text style={styles.emptyCart}>Add something to cart!</Text>
        }
        ListFooterComponent={
          !listEmpty && (
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
    fontSize: 20,
    textAlign: 'center',
    color: '#9C0F48',
    margin: 20,
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
