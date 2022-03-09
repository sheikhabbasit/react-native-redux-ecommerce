import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getDogsByBreed} from '../Network/APIRequest';
import {useNavigation} from '@react-navigation/native';
import DisplayDogs from '../Components/Views/DisplayDogs';
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
        <DisplayDogs
          imageList={imageList}
          onPress={getDogData}
          refreshing={refreshing}
        />
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
});
