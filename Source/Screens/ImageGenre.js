import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Text,
  RefreshControl,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getDogGenres} from '../Network/APIRequest';

const ImageGenre = props => {
  const navigation = useNavigation();
  const [genreList, setGenreList] = useState([
    // 'australian',
    // 'basenji',
    // 'beagle',
    // 'brabancon',
    // 'bulldog',
  ]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getListOfGenres();
    setCount(count => count + 1);
    console.log('breed re-rendering', count);
  }, []);

  const getListOfGenres = async () => {
    setLoading(true);
    const res = await getDogGenres(40);
    if (res.message.length > 0) {
      setGenreList(res.message);
    } else {
      Alert.alert(
        'Error',
        'Something went wrong',
        [{text: 'OK'}, {text: 'Cancel', onPress: () => getListOfGenres()}],
        {cancelable: false},
      );
    }
    setLoading(false);
  };

  const handleNavigation = name => {
    navigation.navigate('Image With Breed', {name});
  };

  return (
    <View style={styles.wrapper}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!loading && (
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          data={genreList}
          renderItem={({item}) => (
            <Pressable
              onPress={() => handleNavigation(item)}
              style={styles.textCard}>
              <Text style={styles.text}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={15}
          disableScrollViewPanResponder={true}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getListOfGenres} />
          }
        />
      )}
    </View>
  );
};

export default ImageGenre;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
    borderRadius: 5,
  },
  flatlistContainer: {
    borderRadius: 5,
  },
  textCard: {
    padding: 16,
    backgroundColor: '#9C0F48',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});
