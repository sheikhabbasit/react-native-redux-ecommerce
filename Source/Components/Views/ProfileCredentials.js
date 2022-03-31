import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const ProfileCredentials = props => {
  const {label, attribute, darkness} = props;
  const darkMode = useTheme();

  return (
    <View style={[styles.itemContainer, darkness && styles.opacityBackdrop]}>
      <Text style={[styles.textLabel, darkMode ? styles.darkModeText : null]}>
        {label}
      </Text>
      <Text style={[styles.credentials, darkMode ? styles.darkModeText : null]}>
        {attribute}
      </Text>
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
  darkModeText: {
    color: 'white',
  },
});
