import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = ({lat, lng}) => {
  return (
    <View style={styles.body}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat || 37.78825,
          longitude: lng || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
