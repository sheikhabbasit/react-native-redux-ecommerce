import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import {CountriesWithLocation} from '../DummyData/CountryData';

const LocationSelect = props => {
  const navigateToCountry = country => {
    props.navigation.navigate('Map', {country});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={CountriesWithLocation}
        renderItem={({item}) => (
          <Pressable
            style={styles.button}
            onPress={() => navigateToCountry(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default LocationSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContainer: {
    margin: 10,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#9C0F48',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  },
});
