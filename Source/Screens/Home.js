import {FlatList, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useLayoutEffect} from 'react';
import ProductItem from '../Components/Views/ProductItem';
import {Products} from '../DummyData/ProductList';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Home = props => {
  const navigation = useNavigation();
  const {email} = useSelector(state => state.app.userInfo);

  useLayoutEffect(() => {
    navigation.setOptions({title: `Welcome "${email}"`});
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput style={styles.textInput} placeholder="Search" />
      <FlatList
        contentContainerStyle={styles.list}
        data={Products}
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
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  list: {
    borderRadius: 10,
    padding: 10,
  },
});

export default Home;
