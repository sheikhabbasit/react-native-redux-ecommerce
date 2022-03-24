import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

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
    marginHorizontal: 10,
  },
});
