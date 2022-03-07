import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import ProductItem from '../Components/Views/ProductItem';
import {Products} from '../DummyData/ProductList';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const [id, setId] = useState('');
  const navigation = useNavigation();
  const {email} = useSelector(state => state.app.userInfo);
  const [productList, setProductList] = useState(Products);
  const [displayCross, setDisplayCross] = useState(false);

  useLayoutEffect(() => {
    const fullName = email.split('@')[0];
    const name = fullName[0].toUpperCase() + fullName.slice(1);
    navigation.setOptions({title: `Welcome ${name}`});
  });

  const clearSearch = () => {
    setSearchValue('');
    setDisplayCross(false);
    setProductList(Products);
    Keyboard.dismiss();
  };

  const handleChange = e => {
    setSearchValue(e.nativeEvent.text);
    if (e.nativeEvent.text.length === 0) {
      setProductList(Products);
      return setDisplayCross(false);
    }
    setDisplayCross(true);
    setProductList(
      Products.filter(product =>
        product.name.toLowerCase().includes(e.nativeEvent.text.toLowerCase()),
      ),
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.searchWrapper, id === 'email' && styles.focus]}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChange={handleChange}
          value={searchValue}
          onFocus={() => setId('email')}
          onBlur={() => setId('')}
        />
        {displayCross && (
          <View style={styles.buttonContainer}>
            <Pressable
              android_ripple={{color: 'grey', borderless: true}}
              onPress={clearSearch}
              style={styles.crossButton}>
              <Text style={styles.crossLabel}>X</Text>
            </Pressable>
          </View>
        )}
      </View>
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
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  focus: {
    borderColor: '#383434',
    color: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 3,
  },
  crossButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  crossLabel: {
    opacity: 0.8,
  },
  list: {
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
  },
});

export default Home;
