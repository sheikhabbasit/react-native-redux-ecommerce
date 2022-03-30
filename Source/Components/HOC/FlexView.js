import {View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const FlexView = ({children, theme}) => {
  return (
    <SafeAreaView style={[styles.wrapper, theme ? styles.darkWrapper : null]}>
      <View style={styles.margin}>{children}</View>
    </SafeAreaView>
  );
};

export default FlexView;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFCBCB',
    flex: 1,
  },
  darkWrapper: {
    backgroundColor: '#203239',
  },
  margin: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: height / 9,
  },
});
