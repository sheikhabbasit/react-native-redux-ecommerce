import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Modal, Text} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImagesList} from '../Redux/ActionCreators/ImageActionCreator';
import Card from '../Components/HOC/Card';
import {useTheme} from '../Hooks/useTheme';
import {getImages} from '../Redux/Reducer/ImagesReducer';
import PushNotification from 'react-native-push-notification';
import {ImagesActions} from '../Redux/Actions/ImagesActions';

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
  const retry = () => {
    getDogData();
    dispatch({type: ImagesActions.CLEAR_ERROR});
  };

  useEffect(() => {
    createChannel();
    if (images.images) setLoading(false);
  }, [images.images]);

  return (
    <View style={[styles.wrapper, darkMode ? styles.darkWrapper : null]}>
      <Card theme={darkMode}>
        <Button
          color="#062C30"
          label="Fetch Random Images"
          onPress={getDogData}
        />
        <Button
          color="#062C30"
          label="Other Routes"
          onPress={() => props.navigation.navigate('Other Routes')}
        />
      </Card>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={images.errorState}
        onRequestClose={retry}>
        <Text>{images.error}</Text>
        <Button color={'green'} label="Retry" onPress={retry} />
      </Modal>
      {loading && <ActivityIndicator size={'large'} />}
      {images.images.length !== 0 && !loading && (
        <Card theme={darkMode}>
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
  modal: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
