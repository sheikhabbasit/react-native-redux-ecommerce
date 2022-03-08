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
import {getDogGenres} from '../Network/APIRequest';

const ImageGenre = props => {
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getListOfGenres();
  }, []);

  const getListOfGenres = async () => {
    setLoading(true);
    const res = await getDogGenres();
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
    props.navigation.navigate('Image With Breed', {name});
  };

  return (
    <View style={styles.wrapper}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!loading && (
        <React.Fragment>
          <FlatList
            contentContainerStyle={styles.flatlistContainer}
            data={genreList}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => handleNavigation(item)}
                  style={styles.textCard}>
                  <Text style={styles.text}>{item}</Text>
                </Pressable>
              );
            }}
            keyExtractor={item => item.toString() + Math.random()}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={getListOfGenres}
              />
            }
          />
        </React.Fragment>
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
