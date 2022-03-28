import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Alert, StyleSheet, Dimensions} from 'react-native';
import Button from '../Components/HOC/Button';
import {ActivityIndicator} from 'react-native-paper';
import {getDogsByBreed} from '../Network/APIRequest';
import {useNavigation} from '@react-navigation/native';
import DisplayDogs from '../Components/Views/DisplayDogs';
import Header from '../Components/Typography/Header';
import {useTheme} from '../Hooks/useTheme';
const {height, width} = Dimensions.get('window');

const ImageWithBreed = props => {
  const navigation = useNavigation();
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const darkMode = useTheme();
  const name = props.route.params.name;
  const controller = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      getDogData();
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => (
        <Header
          iconName="arrow-back-circle-outline"
          size={30}
          theme={darkMode}
          onPress={() => navigation.navigate('Image Genre')}
          name={name}
          variant="Bold"
        />
      ),
    });
  });

  const getDogData = async () => {
    setRefreshing(true);
    imageList.length === 0 ? setLoading(true) : setLoading(false);
    const signal = controller.signal;
    const res = await getDogsByBreed(name, 40, signal);
    if (res.status === 'success') {
      setImageList(res.message);
    } else {
      Alert.alert(
        'Error',
        'Fetching cancelled or failed!',
        [{text: 'OK'}, {text: 'Retry', onPress: () => getDogData()}],
        {cancelable: false},
      );
    }
    setRefreshing(false);
    setLoading(false);
  };

  const cancelFetching = () => {
    console.log('click');
    controller.abort();
  };

  return (
    <View style={styles.wrapper}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator
            animating={true}
            color={'#eda6c2'}
            size={'large'}
            hidesWhenStopped={loading}
          />
          <Button label="Cancel Fetching" onPress={cancelFetching} />
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
    marginBottom: 20,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
