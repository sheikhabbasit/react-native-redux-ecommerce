import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const FlexedScrollView = ({variant, theme, children}) => {
  return (
    <SafeAreaView style={[styles.parent, theme ? styles.darkBackground : null]}>
      <ScrollView
        style={[styles.container, theme ? styles.darkBackground : null]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlexedScrollView;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#eda6c2',
  },
  container: {
    backgroundColor: '#eda6c2',
    padding: 10,
  },
  darkBackground: {
    backgroundColor: '#062C30',
  },
});
