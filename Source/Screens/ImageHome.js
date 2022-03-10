import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import Button from '../Components/HOC/Button';
import DisplayDogs from '../Components/Views/DisplayDogs';
import {getRandomDog} from '../Network/APIRequest';

const ImageHome = props => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {}, []);

  const getDogData = async () => {
    setShowButton(false);
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
