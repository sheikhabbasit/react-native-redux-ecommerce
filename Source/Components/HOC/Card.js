import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../Hooks/useTheme';

const Card = props => {
  const darkMode = useTheme();

  return (
    <View style={[styles.card, darkMode ? styles.darkCard : null]}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9C0F48',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FFCBCB',
  },
  darkCard: {
    backgroundColor: '#05595B',
    borderColor: '#062C30',
  },
});
