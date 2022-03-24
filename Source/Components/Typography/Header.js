import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

const Header = ({iconName, name, size, theme, onPress, variant}) => {
  return (
    <React.Fragment>
      <Ionicons
        name={iconName}
        size={size}
        color={theme ? 'white' : '#eda6c2'}
        style={{marginEnd: 10}}
        onPress={onPress}
      />
      <Text
        numberOfLines={1}
        style={[
          styles.header,
          {fontFamily: `Ubuntu-${variant}`},
          theme ? styles.darkHeader : null,
        ]}>
        {name}
      </Text>
    </React.Fragment>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: '#eda6c2',
    overflow: 'hidden',
    width: width - 70,
  },
  darkHeader: {
    color: 'white',
  },
});
