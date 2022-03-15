import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImagesList} from '../Redux/ActionCreators/ImageActionCreator';

const ImageHome = props => {
  const images = useSelector(state => state.images);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getDogData = async () => {
    setShowButton(false);
    setRefreshing(true);
    setLoading(true);
    dispatch(fetchImagesList());
    setRefreshing(false);
  };

  useEffect(() => {
    if (images.images) setLoading(false);
  }, [images.images]);

  return (
    <View style={styles.wrapper}>
      {showButton && (
        <Button label="Fetch Random Images" onPress={getDogData} />
      )}
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
      {!loading && images.images && (
        <DisplayDogs
          imageList={images.images}
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
