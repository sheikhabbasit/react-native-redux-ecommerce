import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {getPagedImages} from '../Network/APIRequest';

const Pagination = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [imageArray, setImageArray] = useState([]);
  const [addingMoreData, setAddingMoreData] = useState(false);

  const getImages = async () => {
    page === 1 ? setLoading(true) : null;
    const arr = await getPagedImages(page, 8);
    setImageArray(imageArray.concat(arr));
    setPage(prevValue => prevValue + 1);
    setLoading(false);
  };

  const fetchMoreData = () => {
    setAddingMoreData(true);
    setTimeout(() => {
      getImages();
      setAddingMoreData(false);
    }, 3000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      <FlatList
        data={imageArray}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.imageCard}>
              <Image style={styles.image} source={{uri: item.url}} />
              <Text style={styles.text}>{item.id}</Text>
            </View>
          );
        }}
        numColumns={2}
        onEndReached={fetchMoreData}
        ListFooterComponent={() =>
          addingMoreData && (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size={'large'} color="black" />
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
  },
  imageCard: {
    margin: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
