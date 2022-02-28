import {FlatList, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import ProductItem from '../Components/Views/ProductItem';
import {Products} from '../DummyData/ProductList';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const {email} = useSelector(state => state.app.userInfo);
  const [productList, setProductList] = useState(Products);

  useLayoutEffect(() => {
    const fullName = email.split('@')[0];
    const name = fullName[0].toUpperCase() + fullName.slice(1);
    navigation.setOptions({title: `Welcome ${name}`});
  });

  const handleChange = e => {
    setSearchValue(e.nativeEvent.text);
    if (e.nativeEvent.text.length === 0) return setProductList(Products);
    setProductList(
      Products.filter(product =>
        product.name.toLowerCase().includes(e.nativeEvent.text),
      ),
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        onChange={handleChange}
        value={searchValue}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={productList}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFCBCB',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  list: {
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
  },
});

export default Home;
