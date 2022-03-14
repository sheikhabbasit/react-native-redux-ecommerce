import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {getRandomDog} from '../Network/APIRequest';
import {useSelector, useDispatch} from 'react-redux';
import {getImages} from '../Redux/Reducer/ImagesReducer';
import {ImagesActions} from '../Redux/Actions/ImagesActions';

const ImageHome = props => {
  let counter = 0;
  const images = useSelector(state => state.images);
  const dispatch = useDispatch();
  const [imageList, setImageList] = useState(
    images.images ? images.images : [],
  );
  console.log('state', imageList);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getDogData = async () => {
    setShowButton(false);
    setRefreshing(true);
    imageList.length === 0 ? setLoading(true) : setLoading(false);
    // getImages(40);
    const res = await getRandomDog(40);
    if (res.status === 'success') {
      // setImageList(res.message);
      dispatch({type: ImagesActions.STORE_DATA, payload: res.message});
      // setImageList(images);
      // console.log('Dispatch success');
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
    // setTimeout(() => {
    //   console.log(images);
    // }, 5000);
  };

  useEffect(() => {
    setImageList(images.images);
  }, [images]);

  return (
    <View style={styles.wrapper}>
      {/* {showButton && ( */}
      <Button label="Fetch Random Images" onPress={getDogData} />
      {/* )} */}
      <Button
        label="List of Dog Breeds"
        onPress={() => props.navigation.navigate('Image Genre')}
      />
      <Button
        label="List of Countries"
        onPress={() => props.navigation.navigate('Countries')}
      />
      <Button
        label="Pagination Flatlist"
        onPress={() => props.navigation.navigate('Image With Pagination')}
      />
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
});
