import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ProfileCredentials = props => {
  const {label, attribute} = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.credentials}>{attribute}</Text>
    </View>
  );
};

export default ProfileCredentials;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textLabel: {
    color: '#eda6c2',
    fontWeight: 'bold',
  },
  credentials: {
    color: '#a39696',
  },
});
