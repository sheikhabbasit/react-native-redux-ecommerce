import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ProductItem from '../Components/Views/ProductItem';
import {Products} from '../DummyData/ProductList';

const Home = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
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
  list: {
    borderRadius: 10,
    padding: 10,
  },
});

export default Home;
