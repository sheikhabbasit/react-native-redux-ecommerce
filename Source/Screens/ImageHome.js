import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImagesList} from '../Redux/ActionCreators/ImageActionCreator';
import Card from '../Components/HOC/Card';
import {useTheme} from '../Hooks/useTheme';

const ImageHome = props => {
  const darkMode = useTheme();
  const images = useSelector(state => state.images);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getDogData = async () => {
    setRefreshing(true);
    setLoading(true);
    dispatch(fetchImagesList());
    setRefreshing(false);
  };

  useEffect(() => {
    if (images.images) setLoading(false);
  }, [images.images]);

  return (
    <View style={[styles.wrapper, darkMode ? styles.darkWrapper : null]}>
      <Card>
        <Button label="Fetch Random Images" onPress={getDogData} />
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
      </Card>
      {loading && (
        <Card>
          <View style={styles.loadingView}>
            <ActivityIndicator size={'large'} />
          </View>
        </Card>
      )}
      {!loading && images.images && (
        <Card>
          <DisplayDogs
            imageList={images.images}
            onPress={getDogData}
            refreshing={refreshing}
          />
        </Card>
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
  darkWrapper: {
    backgroundColor: '#062C30',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
