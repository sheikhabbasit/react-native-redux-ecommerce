import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import CartItem from '../Components/Views/CartItem';
import {useSelector} from 'react-redux';

const Cart = props => {
  const {cartItems, idWithQuantity} = useSelector(state => state.cart);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.list}
        data={cartItems}
        renderItem={({item}) => (
          <CartItem product={item} idWithQuantity={idWithQuantity} />
        )}
        keyExtractor={item => item.id}
      />
      <ScrollView style={styles.checkoutParent}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter delivery location"
        />
        <View style={styles.checkoutContainer}>
          <Text>Checkout</Text>
        </View>
      </ScrollView>
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
    borderTopWidth: 3,
    borderTopColor: '#eda6c2',
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
});

export default Cart;
