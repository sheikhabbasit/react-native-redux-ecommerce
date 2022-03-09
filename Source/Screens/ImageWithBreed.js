import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Alert,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getDogsByBreed} from '../Network/APIRequest';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const ImageWithBreed = props => {
  const navigation = useNavigation();
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const name = props.route.params.name;

  useEffect(() => {
    getDogData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: props => (
        <React.Fragment>
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color="#eda6c2"
            style={{marginEnd: 10}}
            onPress={() => navigation.goBack()}
          />
          <Text numberOfLines={1} style={styles.header}>
            {name}
          </Text>
        </React.Fragment>
      ),
    });
  });

  const getDogData = async () => {
    setRefreshing(true);
    imageList.length === 0 ? setLoading(true) : setLoading(false);
    const res = await getDogsByBreed(name, 40);
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
            maxToRenderPerBatch={15}
            initialNumToRender={8}
          />
        </React.Fragment>
      )}
    </View>
  );
};

export default ImageWithBreed;

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
  header: {
    fontSize: 18,
    color: '#eda6c2',
    width: width - 70,
    overflow: 'hidden',
  },
});
