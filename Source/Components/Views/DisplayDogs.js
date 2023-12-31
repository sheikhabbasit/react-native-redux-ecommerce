import {
  View,
  FlatList,
  Image,
  StyleSheet,
  RefreshControl,
  Pressable,
} from 'react-native';
import React from 'react';

const DisplayDogs = ({imageList, onPress, refreshing, notificationHandler}) => {
  return (
    <FlatList
      data={imageList}
      renderItem={({item}) => {
        return (
          <View style={styles.imageCard}>
            <Pressable onPress={() => notificationHandler(item)}>
              <Image style={styles.image} source={{uri: item}} />
            </Pressable>
          </View>
        );
      }}
      keyExtractor={item => item.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onPress} />
      }
      maxToRenderPerBatch={15}
      initialNumToRender={8}
    />
  );
};

export default DisplayDogs;

const styles = StyleSheet.create({
  imageCard: {
    margin: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
});
