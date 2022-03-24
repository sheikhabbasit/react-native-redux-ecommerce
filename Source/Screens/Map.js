import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';
import Button from '../Components/HOC/Button';
import MapView, {Marker} from 'react-native-maps';

const Map = props => {
  let lat;
  let lng;
  const [markers, setMarkers] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState({});
  const [formCredentials, setFormCredentials] = useState({
    title: '',
    description: '',
  });

  if (props.route.params?.country) {
    lat = props.route.params.country.lat;
    lng = props.route.params.country.lng;
  }

  const addMarker = e => {
    let coordinates = e.nativeEvent.coordinate;
    setFormActive(true);
    setSelectedCoords(coordinates);
  };

  const addToMarkers = () => {
    setMarkers(markers => [
      ...markers,
      {...selectedCoords, ...formCredentials},
    ]);
    setFormActive(false);
    setFormCredentials({title: '', description: ''});
    setSelectedCoords({});
    Keyboard.dismiss();
  };

  const dismiss = () => {
    setSelectedCoords({});
    setFormActive(false);
    setFormCredentials({title: '', description: ''});
    Keyboard.dismiss();
  };

  return (
    <View style={styles.body}>
      <MapView
        style={[styles.map, formActive ? styles.mapActive : null]}
        initialRegion={{
          latitude: lat || 20.0,
          longitude: lng || 78.0,
          latitudeDelta: 8.0,
          longitudeDelta: 8.0,
        }}
        onPress={dismiss}
        onLongPress={e => addMarker(e)}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            image={require('../Resources/Images/map-marker.png')}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

      {formActive && (
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Title"
            style={styles.textInput}
            onChangeText={text =>
              setFormCredentials({...formCredentials, title: text})
            }
            value={formCredentials.title}
          />
          <TextInput
            placeholder="Description"
            style={styles.textInput}
            onChangeText={text =>
              setFormCredentials({...formCredentials, description: text})
            }
            value={formCredentials.description}
          />
          <Button label="Save" onPress={addToMarkers} />
        </View>
      )}
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
  formContainer: {
    // borderRadius: 10,
    width: '95%',
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 10,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
  },
});
