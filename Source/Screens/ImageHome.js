import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getRandomDog} from '../Network/APIRequest';

const ImageHome = props => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getDogData();
  }, []);

  const getDogData = async () => {
    setRefreshing(true);
    imageList.length === 0 ? setLoading(true) : setLoading(false);
    const res = await getRandomDog(40);
    if (res.status === 'success') {
      setImageList(res.message);
    } else {
      Alert.alert(
        'Error',
        'Something went wrong',
        [{text: 'OK'}, {text: 'Cancel', onPress: () => getDogData()}],
        {cancelable: false},
      );
    }
    setRefreshing(false);
    setLoading(false);
  };

  return (
    <View style={styles.wrapper}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!loading && imageList.length > 0 && (
        <React.Fragment>
          <FlatList
            data={imageList}
            renderItem={({item}) => {
              return (
                <View style={styles.imageCard}>
                  <Image style={styles.image} source={{uri: item}} />
                </View>
              );
            }}
            keyExtractor={item => item.toString() + Math.random()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={getDogData} />
            }
          />
        </React.Fragment>
      )}
    </View>
  );
};

export default ImageHome;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
