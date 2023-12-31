import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
} from 'react-native';
import ProductItem from '../Components/Views/ProductItem';
import {Products} from '../DummyData/ProductList';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useTheme} from '../Hooks/useTheme';
import FlexView from '../Components/HOC/FlexView';

const Home = props => {
  const [searchValue, setSearchValue] = useState('');
  const [id, setId] = useState('');
  const navigation = useNavigation();
  const {name} = useSelector(state => state.app.userInfo);
  const [productList, setProductList] = useState(Products);
  const [displayCross, setDisplayCross] = useState(false);
  const darkMode = useTheme();

  useEffect(() => {
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
    <FlexView theme={darkMode}>
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
        numColumns={2}
      />
    </FlexView>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textInput: {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
