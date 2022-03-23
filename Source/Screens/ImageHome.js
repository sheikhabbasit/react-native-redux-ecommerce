import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImagesList} from '../Redux/ActionCreators/ImageActionCreator';
import Card from '../Components/HOC/Card';
import {useTheme} from '../Hooks/useTheme';
import {getImages} from '../Redux/Reducer/ImagesReducer';
import PushNotification from 'react-native-push-notification';

const ImageHome = props => {
  const darkMode = useTheme();
  const images = useSelector(state => state.images);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getDogData = async () => {
    setRefreshing(true);
    setLoading(true);

    // Saga call
    dispatch(getImages());
    // Action Creator Thunk
    // dispatch(fetchImagesList());

    setRefreshing(false);
  };

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'default',
      channelName: 'default',
    });
  };

  const notificationHandler = item => {
    PushNotification.localNotification({
      channelId: 'default',
      title: 'Doggo',
      message: `${item}`,
    });
  };

  useEffect(() => {
    createChannel();
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
        <Button
          label="Map"
          onPress={() => props.navigation.navigate('Location Select')}
        />
        <Button
          label="Direct to map"
          onPress={() => props.navigation.navigate('Map')}
        />
      </Card>
      {loading && <ActivityIndicator size={'large'} />}
      {!loading && images.images && (
        <Card>
          <DisplayDogs
            notificationHandler={notificationHandler}
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
});
