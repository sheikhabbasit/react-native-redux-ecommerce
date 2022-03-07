import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import CartItem from '../Components/Views/CartItem';
import {useSelector} from 'react-redux';
import Card from '../Components/HOC/Card';
import CartTotals from '../Components/Views/CartTotals';
import CartForm from '../Components/Views/CartForm';
import CartDiscount from '../Components/Views/CartDiscount';

const Cart = props => {
  const {cartItems, idWithQuantity} = useSelector(state => state.cart);
  const [listNotEmpty, setListNotEmpty] = useState(cartItems ? true : false);
  const [discountActive, setDiscountActive] = useState(false);

  useEffect(() => {
    if (cartItems?.length === 0) {
      setDiscountActive(false);
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
  const shipping = cartTotalValue > 500 || cartTotalValue < 1 ? 0 : 10;
  const tax = cartTotalValue * 0.18;
  const discount = discountActive ? (cartTotalValue + shipping + tax) * 0.1 : 0;
  const amountPayable = cartTotalValue + shipping + tax - discount;

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
          <Fragment>
            <Image
              source={require('../Resources/Images/emptycart1.png')}
              style={styles.emptyCart}
            />
            <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          </Fragment>
        }
        ListFooterComponent={
          listNotEmpty && (
            <Fragment>
              <CartForm
                placeholder="Enter Delivery Location"
                boldTextLabel="Destination:"
                textLabel="Dummy Selected Location"
              />
              <CartDiscount
                boldTextLabel="Have a redeem code? Apply here 👇"
                placeholder="Enter Redeem Code"
                handleDiscount={setDiscountActive}
                discountActive={discountActive}
              />
              <Card>
                <CartTotals label="Cart Total:" amount={cartTotalValue} />
                <CartTotals label="Shipping:" amount={shipping} />
                <CartTotals label="Tax:" amount={tax} />
                {discountActive && (
                  <CartTotals label="Discount" amount={`- ${discount}`} />
                )}
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
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
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
    height: 300,
  },
  emptyCartText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#323d5c',
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
